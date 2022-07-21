import * as BABYLON from "@babylonjs/core";

export default class InputManager {
    private readonly dsm: BABYLON.DeviceSourceManager;
    private readonly velocity: number;
    private player: BABYLON.Mesh;

    constructor(engine: BABYLON.Engine,  scene : BABYLON.Scene, player : any, velocity : number) {
        this.velocity = velocity;
        this.player = player.meshes[0];
        this.dsm = new BABYLON.DeviceSourceManager(engine);

        this.dsm.onDeviceConnectedObservable.add((device ) => {
            let fireButton = "n/a";
            switch(device.deviceType) {
                case BABYLON.DeviceType.Keyboard:
                    fireButton = "Spacebar";
                break;
            }
        });

        this.dsm.onDeviceDisconnectedObservable.add((device) => {
            console.log(`Lost connection to ${BABYLON.DeviceType[device.deviceType]}`);
        });

        scene.registerBeforeRender(() => {
            if (this.dsm.getDeviceSource(BABYLON.DeviceType.Keyboard)) {
                // @ts-ignore
                if (this.dsm!==null && this.dsm.getDeviceSource(BABYLON.DeviceType.Keyboard).getInput(37) == 1) {
                    this.turnLeft();
                }

                // @ts-ignore
                if (this.dsm!==null && this.dsm.getDeviceSource(BABYLON.DeviceType.Keyboard).getInput(39) == 1) {
                    this.turnRight();
                }

                // @ts-ignore
                if (this.dsm!==null && this.dsm.getDeviceSource(BABYLON.DeviceType.Keyboard).getInput(38) == 1) {
                    this.goForward();
                }

                // @ts-ignore
                if (this.dsm!==null && this.dsm.getDeviceSource(BABYLON.DeviceType.Keyboard).getInput(40) == 1) {
                    this.goBack();
                }
            }
        });
    }

    turnLeft() {
        this.player.rotate(BABYLON.Axis.Y, -this.velocity, BABYLON.Space.LOCAL);
    }

    turnRight() {
        this.player.rotate(BABYLON.Axis.Y, this.velocity, BABYLON.Space.LOCAL);
    }

    goForward() {
        let direction = BABYLON.Vector3.Forward();
        direction.normalize(); 
        this.player.translate(direction, this.velocity, BABYLON.Space.LOCAL);
    }

    goBack() {
        let direction = BABYLON.Vector3.Backward();
        direction.normalize(); // direction now a unit vector
        this.player.translate(direction, this.velocity, BABYLON.Space.LOCAL);
    }
}
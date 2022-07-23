import * as BABYLON from "@babylonjs/core";
import "@babylonjs/loaders";
import "@babylonjs/inspector";
import InputManager from "./Managers/InputManager";

/**
 * Class to create a BabylonJS application.
 */
export default class App {
    private readonly engine: BABYLON.Engine;
    private scene: BABYLON.Scene;
    /**
     * @param {{canvas : HTMLCanvasElement }} canvas is a HTMLCanvasElement
     * */
    constructor(canvas : HTMLCanvasElement) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        this.engine = new BABYLON.Engine(canvas, true);
        this.scene = this.CreateScene(this.engine, canvas);
    }

    Run() {
        this.engine.runRenderLoop(() => {
            this.scene.render();
        });

        window.addEventListener("resize", () => {
            this.engine.resize();
        });
    }

    CreateScene(engine: BABYLON.Engine, canvas : HTMLCanvasElement): BABYLON.Scene {
        let scene = new BABYLON.Scene(engine);
        //scene.debugLayer.show();
        let camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(5,5,-5), scene);
        scene.ambientColor = new BABYLON.Color3(1, 0.5, 0.5);
        scene.clearColor = new BABYLON.Color4(1, 1, 1, 1);
        camera.rotation.z = 0;
        camera.rotation.x = 0.3;
        let light = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(5, 7, 10), scene);
        let background = new BABYLON.Layer("background", "assets/test_background.png", scene, true);

        light.diffuse = new BABYLON.Color3(1, 1, 1);
        light.specular = new BABYLON.Color3(1, 1, 1);
        //light.groundColor = new BABYLON.Color3(0, 0, 0);
        light.intensity = 5;

        this.LoadPlayer(scene).then(player => {
            let inputManager = new InputManager(this.engine, scene, player, 0.1);
            player.meshes[0].position.z = 5;
        });

        return scene;
    }

    async LoadPlayer(scene : BABYLON.Scene) : Promise<BABYLON.ISceneLoaderAsyncResult> {
        return await BABYLON.SceneLoader.ImportMeshAsync("", '/assets/', 'jill.glb',scene);
    }
}
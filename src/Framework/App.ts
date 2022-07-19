import * as BABYLON from "@babylonjs/core";
import "@babylonjs/loaders";
import InputManager from "./Managers/InputManager";

/**
 * Class to create a BabylonJS application.
 */
export default class App {
    private readonly engine: Engine;
    private scene: Scene;
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

    CreateScene(engine: Engine, canvas : HTMLCanvasElement): Scene {
        let scene = new BABYLON.Scene(engine);
        let camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0,2,-10), scene);
        let ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 10, height: 10}, scene);
        let light = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(0, 5, -5), scene);

        light.diffuse = new BABYLON.Color3(0.5, 0.5, 0.5);

        this.LoadPlayer(scene).then(player => {
            let inputManager = new InputManager(this.engine, scene, player, 0.1);
        });

        return scene;
    }

    async LoadPlayer(scene) {
        return await BABYLON.SceneLoader.ImportMeshAsync("", '/assets/', 'jill.glb',scene);
    }
}
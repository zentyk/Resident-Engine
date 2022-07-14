import {
    Engine,
    Scene,
    FreeCamera,
    Vector3, MeshBuilder, PointLight, DirectionalLight, SpotLight, HemisphericLight, Color3, StandardMaterial, Texture
} from "@babylonjs/core";


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
        this.engine = new Engine(canvas, true);
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
        let scene = new Scene(engine);
        let camera = new FreeCamera(
            "camera1",
            new Vector3(0, 1, -5),
            scene
        );

        camera.attachControl(canvas,true);

        let ground = MeshBuilder.CreateGround("ground", {width: 10, height: 10}, scene);

        let light = new PointLight("pointLight", new Vector3(-2, 2, -2), scene);

        let box1 = MeshBuilder.CreateBox("box", {size: 0.75}, scene);
        let box2 = MeshBuilder.CreateBox("box", {size: 1}, scene);
        let box3 = MeshBuilder.CreateBox("box", {size: 0.5}, scene);

        box1.position = new Vector3(0,1,1);
        box2.position = new Vector3(0,1,-1);
        box3.position = new Vector3(1,1,0);

        let redMat = new StandardMaterial("redMat", scene);

        let transparentMat = new StandardMaterial("transparentMat", scene);
        let emissiveMat = new StandardMaterial("emissiveMat", scene);
        let text = new Texture("./download.jpg", scene);

        redMat.diffuseColor = new Color3(1, 0, 0);
        redMat.diffuseTexture = text;

        transparentMat.alpha = 0.1;
        emissiveMat.emissiveColor = new Color3(0,1,1);

        box1.material = redMat;
        box2.material = transparentMat;
        box3.material = emissiveMat;

        return scene;
    }
}
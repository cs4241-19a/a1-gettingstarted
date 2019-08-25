window.onload = function() {

    new TypeIt('#typed', {
        speed: 200,
        waitUntilVisible: true
    }).go();

    var canvas = document.getElementById("renderCanvas"); // Get the canvas element
    var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

    // Create the scene space
    var scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3.Black();

    // Add a camera to the scene and attach it to the canvas
    var camera = new BABYLON.ArcRotateCamera("camera1", - Math.PI / 3, 5 * Math.PI / 12, 50, new BABYLON.Vector3(0, 5, 0), scene);

    // Add lights to the scene
    var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
    var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);

    var groundMaterial = new BABYLON.GridMaterial("groundMaterial", scene);
    groundMaterial.majorUnitFrequency = 5;
    groundMaterial.minorUnitVisibility = 0.45;
    groundMaterial.gridRatio = 2;
    groundMaterial.backFaceCulling = false;
    groundMaterial.mainColor = new BABYLON.Color3(1, 1, 1);
    groundMaterial.lineColor = new BABYLON.Color3(1.0, 1.0, 1.0);
    groundMaterial.opacity = 0.98;

    var ground = BABYLON.Mesh.CreateGroundFromHeightMap("ground", "./files/heightMap.png", 100, 100, 100, 0, 10, scene, false);
    ground.material = groundMaterial;


    // Register a render loop to repeatedly render the scene
    engine.runRenderLoop(function () {
        camera.alpha += 0.003;

        scene.render();
    });

    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
        engine.resize();
    });
};

// Create scene
var scene = new THREE.Scene();
var renderer = CreateRenderer();

//Add the camera
var camera = CreateCamera();
var controls = CreateControls(camera);
scene.add(controls.getObject());

//Add the camera controls
animateControls();

//Add the lights to the scene
AddLights(scene);

/**
 * Create a house with a modified cilinder roof
 * @param {Vector3} position
 */
function CreateHouseWithCilinderRoof(position) {
    //create meshes   
    var geometry = new THREE.CylinderGeometry(0, (position.y / 2) * 1.4, position.y / 2, 4);
    var texture = new THREE.TextureLoader().load("images/rooftexture_2.jpg");
    var material = new THREE.MeshPhongMaterial({ map: texture });
    var cylinder = new THREE.Mesh(geometry, material);
    cylinder.position.set(position.x, position.y + (position.y / 4), position.z);
    cylinder.rotation.set(0, THREE.Math.degToRad(45), 0);

    scene.add(CreateTexturedCube(position, position.y / 2, "images/bricktexture_2.jpg"));
    scene.add(cylinder);
}

//Create a simple house
function CreateHouse(position, scale) {
    scene.add(CreateTexturedCube(position, scale, "images/bricktexture_2.jpg"));
    scene.add(CreateDoor(new Vector3(position.x, 10, position.z - scale), new Vector2(10, 20), "images/doortexture.png"));
    scene.add(CreateCustomRoof(position, new Vector2(scale, scale), "images/rooftexture_2.jpg"));
}

function AddObjectsToScene() {

    for (var i = 0; i < 5; i++) {
        //Houses
        CreateHouse(new Vector3(-200 + (i * 100), 40, 60), 20);
        CreateHouseWithCilinderRoof(new Vector3(-200 + (i * 100), 40, -60), 20);

        //Trees
        CreateTree(new Vector3(-150 + (i * 100), 0, -45), scene);
    }



    //Floor
    scene.add(CreatePlane(new Vector2(600, 600), new Vector2(20, 20), new Vector3(0, 0, 0), "images/Grass_Texture_dn.jpg"));

    //Road
    scene.add(CreatePlane(new Vector2(600, 40), new Vector2(20, 1), new Vector3(0, 0.5, 0), "images/roadtexture.jpg"));



    //Add the skybox
    CreateSkyBox(scene);
}

AddObjectsToScene();
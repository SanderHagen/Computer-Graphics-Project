
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

//Create a house with custom geometry roof
function CreateHouseWithCustomRoof() {
    //create meshes
    CreateBase(15, 10, 5, scene);

    var geometry = new THREE.CylinderGeometry(0, 7, 5, 4);
    var texture = new THREE.TextureLoader().load("images/rooftexture.jpg");
    var material = new THREE.MeshPhongMaterial({ map: texture });
    var cylinder = new THREE.Mesh(geometry, material);
    cylinder.position.set(15, 12.5, 5);
    cylinder.rotation.set(0, 40, 0);
    scene.add(cylinder);
}

//Create a simple house
function CreateHouse(x, y, z) {
    CreateBase(x, y, z, scene);
    CreateRoof(x, y, z, scene);
}

function AddObjectsToScene() {
    //Houses
    CreateHouseWithCustomRoof();
    CreateHouse(25, 10, 25);

    //Floor
    CreateFloor(scene);

    //Trees
    CreateTree(-20, 0, -40, scene);

    //Add the skybox
    CreateSkyBox(scene);
}

AddObjectsToScene();
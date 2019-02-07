// Create scene
var scene = new THREE.Scene();


var renderer = CreateRenderer();
var vector = new THREE.Vector3(); 

//create meshes
var cube = CreateBase(15,5);

scene.add(cube);

var cube2 = CreateBase(25,25);

scene.add(cube2);

scene.add(CreateFloor());

var camera = CreateCamera();

var controls = CreateControls(camera);

scene.add(controls.getObject());

AddSun(scene);

CreateSkyBox(scene);


animate();
// Create scene
var scene = new THREE.Scene();


var renderer = CreateRenderer();
var vector = new THREE.Vector3(); 

//create meshes
var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshPhongMaterial({color:0x27a,shininess:0});
var cube = new THREE.Mesh(geometry, material);
cube.position.set(0,50,1);

scene.add(cube);

scene.add(CreateFloor());

var camera = CreateCamera();

var controls = CreateControls(camera);

scene.add(controls.getObject());

AddSun(scene);

CreateSkyBox(scene);


animate();
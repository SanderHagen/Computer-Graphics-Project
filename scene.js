// Create scene
var scene = new THREE.Scene();


var renderer = CreateRenderer();
var vector = new THREE.Vector3(); 

//create meshes
CreateBase(15,10,5,scene);

//CreateRoof(15,10,5,scene);

var geometry = new THREE.CylinderGeometry( 0, 7, 5, 4 );
var texture = new THREE.TextureLoader().load( "images/rooftexture.jpg" );
var material = new THREE.MeshBasicMaterial( {map:texture} );
var cylinder = new THREE.Mesh( geometry, material );
cylinder.position.set(15,12.5,5);
cylinder.rotation.set(0,40,0);
scene.add( cylinder );


CreateBase(25,10,25,scene);

CreateRoof(25,10,25,scene);

CreateFloor(scene);

CreateTree(-20,0,-40,scene);

var camera = CreateCamera();

var controls = CreateControls(camera);

scene.add(controls.getObject());

AddSun(scene);

CreateSkyBox(scene);


animate();
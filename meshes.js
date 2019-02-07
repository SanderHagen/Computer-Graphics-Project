function CreateFloor(){
    var geometry = new THREE.BoxGeometry(1000,1,1000);

    // load a texture, set wrap mode to repeat
    var texture = new THREE.TextureLoader().load( "images/groundtexture.jpg" );
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set( 500, 500 );

    var material = new THREE.MeshBasicMaterial( {map: texture });
    var floor = new THREE.Mesh(geometry, material);
    return floor;
}

function CreateBase(x,z){
    var geometry = new THREE.BoxGeometry(10,10,10);
    var material = new THREE.MeshPhongMaterial({color:0x27a,shininess:0});
    var cube = new THREE.Mesh(geometry, material);
    cube.position.set(x,5,z);
    return cube;
}

function createPyramid(){
    var geometry = new THREE.Geometry();

    geometry.vertices = [
        new THREE.Vector3( 0, 0, 0 ),
        new THREE.Vector3( 0, 1, 0 ),
        new THREE.Vector3( 1, 1, 0 ),
        new THREE.Vector3( 1, 0, 0 ),
        new THREE.Vector3( 0.5, 0.5, 1 )
    ];

    geometry.faces = [
        new THREE.Face3( 0, 1, 2 ),
        new THREE.Face3( 0, 2, 3 ),
        new THREE.Face3( 1, 0, 4 ),
        new THREE.Face3( 2, 1, 4 ),
        new THREE.Face3( 3, 2, 4 ),
        new THREE.Face3( 0, 3, 4 )
    ];    
    return geometry;
}
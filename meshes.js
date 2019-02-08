function CreateFloor(){
    var geometry = new THREE.BoxGeometry(500,1,500);

    // load a texture, set wrap mode to repeat
    var texture = new THREE.TextureLoader().load( "images/groundtexture.jpg" );
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set( 100, 100 );

    var material = new THREE.MeshBasicMaterial( {map: texture });
    var floor = new THREE.Mesh(geometry, material);
    return floor;
}

function CreateBase(x,y,z){
    var geometry = new THREE.BoxGeometry(10,y,10);
    geometry.computeBoundingSphere();
    var material = new THREE.MeshPhongMaterial({color:0xffffff,shininess:100});
    var cube = new THREE.Mesh(geometry, material);
    cube.position.set(x,(y/2),z);
    return cube;
}

function createPyramid(x,y,z){
    var geometry = new THREE.Geometry();

    geometry.vertices.push(
        new THREE.Vector3( (x-5), y, (z-5)),
        new THREE.Vector3( (x+5), y, (z+5) ),
        new THREE.Vector3( (x-5), y, (z+5 )),
        new THREE.Vector3( (x+5), y, (z-5 )),
        new THREE.Vector3(x, (y+5), z)
    );
    var color = new THREE.Color( 0xffaa00 ); 
    geometry.faces.push(
        new THREE.Face3( 2,1,4,null,color),
        new THREE.Face3( 1,3,4,null,color),
        new THREE.Face3( 3,0,4,null,color),
        new THREE.Face3( 0,2,4,null,color),
    );

    geometry.computeBoundingSphere();
    return geometry;
}

function CreateRoof(x, y, z){
    var geometry = createPyramid(x,y,z);
    var roof = new THREE.Mesh(geometry);
    return roof;
}
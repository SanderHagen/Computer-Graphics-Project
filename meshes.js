function CreateFloor(scene){
    var geometry = new THREE.BoxGeometry(300,1,300);

    // load a texture, set wrap mode to repeat
    var texture = new THREE.TextureLoader().load( "images/groundtexture.jpg" );
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set( 10, 10 );

    var material = new THREE.MeshBasicMaterial( {map: texture });
    var floor = new THREE.Mesh(geometry, material);
    scene.add(floor);
}

function CreateBase(x,y,z,scene){
    var geometry = new THREE.BoxGeometry(10,y,10);
    geometry.computeBoundingSphere();

    var texture = new THREE.TextureLoader().load( "images/bricktexture.jpg" );

    var material = new THREE.MeshBasicMaterial({map:texture});
    var cube = new THREE.Mesh(geometry, material);
    cube.position.set(x,(y/2),z);
    scene.add(cube);
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

    var uvs = [];
    uvs.push( new THREE.Vector2((x-5), y));
    uvs.push( new THREE.Vector2( (x+5), y));
    uvs.push( new THREE.Vector2( (x-5), y) );
    uvs.push(new THREE.Vector2( (x+5), y));
    uvs.push(new THREE.Vector2(x, (y+5))); // has to be 1.0,1.0
    geometry.faceVertexUvs[0] = [];

    //geometry.faceVertexUvs[ 0 ].push( [ uvs[2], uvs[3], uvs[0] ] );

    geometry.faces.push(
        new THREE.Face3( 2,1,4),
        new THREE.Face3( 1,3,4),
        new THREE.Face3( 3,0,4),
        new THREE.Face3( 0,2,4),
    );

    geometry.faceVertexUvs[ 0 ][0] =  [ uvs[2], uvs[1], uvs[4]];
    geometry.faceVertexUvs[ 0 ][1]=[ uvs[1], uvs[3], uvs[4]];
    geometry.faceVertexUvs[ 0 ][2]= [ uvs[3], uvs[0], uvs[4]];
    geometry.faceVertexUvs[ 0 ][3]= [ uvs[0], uvs[2], uvs[4]] ;
    //geometry.computeFaceNormals();
    //geometry.computeVertexNormals();

    geometry.faceVertexUvs[0].push(
        new THREE.Vector3( (x-5), y, (z-5)),
         new THREE.Vector3( (x+5), y, (z+5)),
         new THREE.Vector3((x-5), y, (z+5 )),
         new THREE.Vector3( (x+5), y, (z-5) ),
         new THREE.Vector3(x, (y+5), z)
    );
    //geometry.computeBoundingSphere();
    return geometry;
}

function CreateRoof(x, y, z, scene){
    var texture = new THREE.TextureLoader().load( "images/rooftexture.jpg" );
    var material = new THREE.MeshStandardMaterial( { map : texture} );
    var geometry = createPyramid(x,y,z);
    var roof = new THREE.Mesh(geometry,material);
    scene.add(roof);
}

function CreateTree(x,y,z){
    var material = new THREE.MeshPhongMaterial({color:'darkolivegreen'});
    var geometry = new THREE.CylinderGeometry(4,4,50,32);
    var cylinder = new THREE.Mesh(geometry,material);

    var canopy = new THREE.SphereGeometry(5,32,32);
    var canopymesh = new THREE.Mesh(canopy,material);
    canopymesh.position.set(x,y+25,z);    
    
    var canopy2 = new THREE.SphereGeometry(2,32,32);
    var canopymesh2 = new THREE.Mesh(canopy2,material);
    canopymesh2.position.set(x-4,y+28,z);

    var canopymesh3 = new THREE.Mesh(canopy2,material);
    canopymesh3.position.set(x+4,y+28,z);

    var canopymesh4 = new THREE.Mesh(canopy2,material);
    canopymesh4.position.set(x,y+28,z+4);

    var canopymesh5 = new THREE.Mesh(canopy2,material);
    canopymesh5.position.set(x,y+28,z-4);

    cylinder.position.set(x,y,z);

    scene.add(canopymesh);
    scene.add(canopymesh2);
    scene.add(canopymesh3);
    scene.add(canopymesh4);
    scene.add(canopymesh5);
    scene.add(cylinder);
}
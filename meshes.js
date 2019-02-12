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
    var geometry = new THREE.CylinderGeometry(3,3,50,32);
    var cylinder = new THREE.Mesh(geometry,material);

    var canopy = new THREE.SphereGeometry(5,32,32);
    var canopymesh = new THREE.Mesh(canopy,material);
    canopymesh.position.set(x,y+25,z);    
    
    var canopy2 = new THREE.SphereGeometry(3,32,32);
    var canopymesh2 = new THREE.Mesh(canopy2,material);
    canopymesh2.position.set(x-2,y+27,z);

    var canopymesh3 = new THREE.Mesh(canopy2,material);
    canopymesh3.position.set(x+2,y+27,z);

    var canopymesh4 = new THREE.Mesh(canopy2,material);
    canopymesh4.position.set(x,y+27,z+2);

    var canopymesh5 = new THREE.Mesh(canopy2,material);
    canopymesh5.position.set(x,y+27,z-2);

    var canopymesh6 = new THREE.Mesh(canopy2,material);
    canopymesh6.position.set(x-2,y+23,z);

    var canopymesh7 = new THREE.Mesh(canopy2,material);
    canopymesh7.position.set(x+2,y+23,z);

    var canopymesh8 = new THREE.Mesh(canopy2,material);
    canopymesh8.position.set(x,y+23,z+2);

    var canopymesh9 = new THREE.Mesh(canopy2,material);
    canopymesh9.position.set(x,y+23,z-2);

    var canopymesh10 = new THREE.Mesh(canopy2,material);
    canopymesh10.position.set(x-4,y+25,z);

    var canopymesh11 = new THREE.Mesh(canopy2,material);
    canopymesh11.position.set(x+4,y+25,z);

    var canopymesh12 = new THREE.Mesh(canopy2,material);
    canopymesh12.position.set(x,y+25,z+4);

    var canopymesh13 = new THREE.Mesh(canopy2,material);
    canopymesh13.position.set(x,y+25,z-4);

    cylinder.position.set(x,y,z);

    scene.add(canopymesh);
    scene.add(canopymesh2);
    scene.add(canopymesh3);
    scene.add(canopymesh4);
    scene.add(canopymesh5);
    scene.add(canopymesh6);
    scene.add(canopymesh7);
    scene.add(canopymesh8);
    scene.add(canopymesh9);
    scene.add(canopymesh10);
    scene.add(canopymesh11);
    scene.add(canopymesh12);
    scene.add(canopymesh13);
    scene.add(cylinder);
}
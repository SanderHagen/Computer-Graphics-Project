function CreateFloor(scene) {
    var geometry = new THREE.BoxGeometry(600, 1, 600);

    // load a texture, set wrap mode to repeat
    var texture = new THREE.TextureLoader().load("images/groundtexture.jpg");
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(10, 10);

    var material = new THREE.MeshBasicMaterial({ map: texture });
    var floor = new THREE.Mesh(geometry, material);
    scene.add(floor);
}

function CreateBase(x, y, z, scene) {
    var geometry = new THREE.BoxGeometry(10, y, 10);
    geometry.computeBoundingSphere();

    var texture = new THREE.TextureLoader().load("images/bricktexture.jpg");

    var material = new THREE.MeshPhongMaterial({ map: texture });
    var cube = new THREE.Mesh(geometry, material);
    cube.position.set(x, (y / 2), z);
    scene.add(cube);
}

function createPyramid(x, y, z) {
    var geometry = new THREE.Geometry();

    geometry.vertices.push(
        new THREE.Vector3((x - 5), y, (z - 5)),
        new THREE.Vector3((x + 5), y, (z + 5)),
        new THREE.Vector3((x - 5), y, (z + 5)),
        new THREE.Vector3((x + 5), y, (z - 5)),
        new THREE.Vector3(x, (y + 5), z)
    );

    var uvs = [];
    uvs.push(new THREE.Vector2(0, 0));
    uvs.push(new THREE.Vector2(0.5, 1));
    uvs.push(new THREE.Vector2(1, 0));
    uvs.push(new THREE.Vector2(1, 1));
    geometry.faceVertexUvs[0] = [];

    //geometry.faceVertexUvs[ 0 ].push( [ uvs[2], uvs[3], uvs[0] ] );

    //Direction the object is shown (should be from inner to outer)
    geometry.faces.push(
        new THREE.Face3(2, 1, 4),
        new THREE.Face3(1, 3, 4),
        new THREE.Face3(3, 0, 4),
        new THREE.Face3(0, 2, 4),
    );

    //Front
    geometry.faceVertexUvs[0][0] = [uvs[2], uvs[0], uvs[1]];

    //Left
    geometry.faceVertexUvs[0][1] = [uvs[0], uvs[2], uvs[1]];

    //Back
    geometry.faceVertexUvs[0][2] = [uvs[0], uvs[2], uvs[1]];

    //Right
    geometry.faceVertexUvs[0][3] = [uvs[0], uvs[2], uvs[1]];


    geometry.computeFaceNormals();
    geometry.computeVertexNormals();

    /*
    geometry.faceVertexUvs[0].push(
        new THREE.Vector3((x - 5), y, (z - 5)),
        new THREE.Vector3((x + 5), y, (z + 5)),
        new THREE.Vector3((x - 5), y, (z + 5)),
        new THREE.Vector3((x + 5), y, (z - 5)),
        new THREE.Vector3(x, (y + 5), z)
    );
    */
    //geometry.computeBoundingSphere();
    return geometry;
}

function CreateRoof(x, y, z, scene) {
    var texture = new THREE.TextureLoader().load("images/rooftexture.jpg");
    var material = new THREE.MeshStandardMaterial({ map: texture });
    var geometry = createPyramid(x, y, z);
    var roof = new THREE.Mesh(geometry, material);
    scene.add(roof);
}

function CreateTree(x, y, z) {
    var material = new THREE.MeshPhongMaterial({ color: 'darkolivegreen', reflectivity: 0.5 });
    var geometry = new THREE.CylinderGeometry(3, 3, 50, 32);

    //Tree trunk
    var trunkMaterial = new THREE.MeshPhongMaterial({ color: 'brown', reflectivity: 0.5 });
    var cylinder = new THREE.Mesh(geometry, trunkMaterial);
    cylinder.position.set(x, y, z);
    scene.add(cylinder);

    //Main Canopy
    var canopyLarge = new THREE.SphereGeometry(8, 32, 32);
    var canopymesh = new THREE.Mesh(canopyLarge, material);
    canopymesh.position.set(x, y + 25, z);
    scene.add(canopymesh);

    //Smaller canopies
    var canopyArray = [
        [-2, 27, 0],
        [2, 27, 0],
        [0, 27, 2],
        [0, 27, -2],

        [-2, 23, 0],
        [2, 23, 0],
        [0, 23, 2],
        [0, 23, -2],

        [-4, 25, 0],
        [4, 25, 0],
        [0, 25, -4],
        [0, 25, 4]
    ];

    var canopySmall = new THREE.SphereGeometry(6, 32, 32);

    for (var i = 0; i < canopyArray.length; i++) {
        var canopySmallMesh = new THREE.Mesh(canopySmall, material);
        canopySmallMesh.position.set(x + canopyArray[i][0], y + canopyArray[i][1], z + canopyArray[i][2]);
        scene.add(canopySmallMesh);
    }
}
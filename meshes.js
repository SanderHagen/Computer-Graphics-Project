/**
 * Create a flat surface plane with a texture
 * @param {Vector2} size 
 * @param {Vector2} repeat 
 * @param {Vector3} position
 * @param {String} texture
 */
function CreatePlane(size, repeat, position, texture) {
    var geometry = new THREE.PlaneGeometry(size.x, size.y, 1);

    // load a texture, set wrap mode to repeat
    var texture = new THREE.TextureLoader().load(texture);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(repeat.x, repeat.y);

    var material = new THREE.MeshPhongMaterial({ map: texture });
    var ground = new THREE.Mesh(geometry, material);

    ground.position.set(position.x, position.y, position.z);
    ground.rotateX(THREE.Math.degToRad(-90));

    return ground;
}

/** 
 * Create a cube with a texture
 * @param {Vector3} position 
 * @param {number} scale 
 * @param {String} texture
 */
function CreateTexturedCube(position, scale, texture) {
    var geometry = new THREE.BoxGeometry(scale * 2, position.y, scale * 2);
    geometry.computeBoundingSphere();

    var texture = new THREE.TextureLoader().load(texture);

    var material = new THREE.MeshPhongMaterial({ map: texture, bumpMap: texture });
    var cube = new THREE.Mesh(geometry, material);
    cube.position.set(position.x, (position.y / 2), position.z);
    return cube;
}

/**
 * 
 * @param {Vector3} position 
 * @param {Vector2} size 
 * @param {*} texture 
 */
function CreateDoor(position, size, texture) {
    var geometry = new THREE.BoxGeometry(size.x, size.y, 1);
    var texture = new THREE.TextureLoader().load(texture);

    var material = new THREE.MeshLambertMaterial({ map: texture, bumpMap: texture });
    var box = new THREE.Mesh(geometry, material);
    box.position.set(position.x, position.y, position.z)
    return box;
}

/**
 * Create a pyramid from vertices
 * @param {Vector3} position
 * @param {number} scale 
 */
function createPyramid(position, scale) {
    var geometry = new THREE.Geometry();

    //Add vertices
    geometry.vertices.push(
        new THREE.Vector3((position.x - scale), position.y, (position.z - scale)),
        new THREE.Vector3((position.x + scale), position.y, (position.z + scale)),
        new THREE.Vector3((position.x - scale), position.y, (position.z + scale)),
        new THREE.Vector3((position.x + scale), position.y, (position.z - scale)),
        new THREE.Vector3(position.x, (position.y + scale), position.z)
    );

    //Define UV points
    var uvs = [];
    uvs.push(
        new THREE.Vector2(0, 0),
        new THREE.Vector2(0.5, 1),
        new THREE.Vector2(1, 0)
    );

    //Direction the object is shown (should be from inner to outer)
    geometry.faces.push(
        new THREE.Face3(2, 1, 4),
        new THREE.Face3(1, 3, 4),
        new THREE.Face3(3, 0, 4),
        new THREE.Face3(0, 2, 4),
    );

    //UV Mapping
    geometry.faceVertexUvs[0] = [];
    geometry.faceVertexUvs[0][0] = [uvs[2], uvs[0], uvs[1]];
    geometry.faceVertexUvs[0][1] = [uvs[0], uvs[2], uvs[1]];
    geometry.faceVertexUvs[0][2] = [uvs[0], uvs[2], uvs[1]];
    geometry.faceVertexUvs[0][3] = [uvs[0], uvs[2], uvs[1]];

    geometry.computeFaceNormals();
    geometry.computeVertexNormals();
    geometry.computeBoundingSphere();
    return geometry;
}

/**
 * 
 * @param {Vector3} position 
 * @param {Vector2} size 
 * @param {string} texture 
 */
function createRoofGeometry(position, size) {
    var geometry = new THREE.Geometry();

    //Add vertices
    geometry.vertices.push(
        new THREE.Vector3((position.x - size.x), position.y, (position.z + size.y)), //0
        new THREE.Vector3((position.x - size.x), position.y, (position.z - size.y)), //1
        new THREE.Vector3((position.x + size.x), position.y, (position.z - size.y)), //2
        new THREE.Vector3((position.x + size.x), position.y, (position.z + size.y)), //3
        new THREE.Vector3(position.x, (position.y + size.x), position.z + size.y), // 4
        new THREE.Vector3(position.x, (position.y + size.x), position.z - size.y) // 5
    );

    //Define UV points
    var uvs = [];
    uvs.push(
        new THREE.Vector2(0, 0),   //0
        new THREE.Vector2(0.5, 1), //1
        new THREE.Vector2(1, 0),   //2
        new THREE.Vector2(1, 1),   //3
        new THREE.Vector2(0, 1)    //4
    );

    //Direction the object is shown (should be from inner to outer)
    geometry.faces.push(
        new THREE.Face3(0, 5, 1),
        new THREE.Face3(0, 4, 5),
        new THREE.Face3(1, 5, 2),
        new THREE.Face3(2, 5, 3),
        new THREE.Face3(3, 5, 4),
        new THREE.Face3(3, 4, 0)

    );

    //UV Mapping
    geometry.faceVertexUvs[0] = [];
    geometry.faceVertexUvs[0][0] = [uvs[0], uvs[3], uvs[2]];
    geometry.faceVertexUvs[0][1] = [uvs[0], uvs[4], uvs[3]];
    geometry.faceVertexUvs[0][2] = [uvs[0], uvs[1], uvs[2]];
    geometry.faceVertexUvs[0][3] = [uvs[0], uvs[4], uvs[2]];
    geometry.faceVertexUvs[0][4] = [uvs[2], uvs[4], uvs[3]];
    geometry.faceVertexUvs[0][5] = [uvs[0], uvs[1], uvs[2]];


    geometry.computeFaceNormals();
    geometry.computeVertexNormals();
    geometry.computeBoundingSphere();
    return geometry;
}

/**
 * @param {Vector3} position 
 * @param {number} scale 
 */
function CreateRoof(position, scale) {
    var texture = new THREE.TextureLoader().load("images/rooftexture_2.jpg");
    var material = new THREE.MeshPhongMaterial({ map: texture });
    var geometry = createPyramid(new Vector3(position.x, position.y, position.z), scale);
    var roof = new THREE.Mesh(geometry, material);
    return roof;
}

function CreateCustomRoof(position, size, texture) {
    var texture = new THREE.TextureLoader().load(texture);
    var material = new THREE.MeshPhongMaterial({ map: texture });
    var geometry = createRoofGeometry(position, size);
    var roof = new THREE.Mesh(geometry, material);
    return roof;
}

/**
 * @param {Vector3} position 
 * @param {*} scene
 */
function CreateTree(position, scene) {
    var material = new THREE.MeshLambertMaterial({ color: 'darkolivegreen', reflectivity: 1, refractionRatio: 0.5 });
    var geometry = new THREE.CylinderGeometry(3, 3, 50, 32);

    //Tree trunk
    var trunkMaterial = new THREE.MeshLambertMaterial({ color: 'brown', reflectivity: 1 });
    var cylinder = new THREE.Mesh(geometry, trunkMaterial);
    cylinder.position.set(position.x, position.y, position.z);
    scene.add(cylinder);

    //Main Canopy
    var canopyLarge = new THREE.SphereGeometry(8, 32, 32);
    var canopymesh = new THREE.Mesh(canopyLarge, material);
    canopymesh.position.set(position.x, position.y + 25, position.z);
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
        canopySmallMesh.position.set(position.x + canopyArray[i][0], position.y + canopyArray[i][1], position.z + canopyArray[i][2]);
        scene.add(canopySmallMesh);
    }
}
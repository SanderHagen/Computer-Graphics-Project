var loader = new THREE.ObjectLoader();
var car;

//Car
loader.load('./models/mustang/1967-shelby-ford-mustang.json', function (geometry) {
    geometry.position.x = 0;
    geometry.position.y = 1;
    geometry.position.z = 10;
    geometry.scale.set(3, 3, 3);
    geometry.rotateY(THREE.Math.degToRad(90));
    car = geometry;
    scene.add(geometry);
});

//Street lights
loader.load('./models/street-lamp.json', function (geometry) {

    //Add multiple street lights
    for (var i = 0; i < 4; i++) {
        var model = geometry.clone();

        model.position.set(250 - (i * 150), 15, 30);
        model.scale.set(3, 3, 3);
        scene.add(model);
    }
});
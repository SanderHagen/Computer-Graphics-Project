var loader = new THREE.ObjectLoader();
var car;
var streetlamp;

loader.load('./models/mustang/1967-shelby-ford-mustang.json', function (geometry) {
    geometry.position.x = 40;
    geometry.position.y = 1;
    geometry.position.z = -30;
    geometry.scale.set(3, 3, 3);
    car = geometry;
    scene.add(geometry);
});

loader.load('./models/street-lamp.json', function (geometry) {
    geometry.position.x = -40;
    geometry.position.y = 15;
    geometry.position.z = -30;
    geometry.scale.set(3, 3, 3);
    streetlamp = geometry;
    scene.add(geometry);
});
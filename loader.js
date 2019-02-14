var loader = new THREE.ObjectLoader();
var car;
loader.load( '/models/mustang/1967-shelby-ford-mustang.json', function ( geometry ) {
    geometry.position.x =40;
    geometry.position.y = 1;
    geometry.position.z =-30;
    geometry.scale.set(3,3,3);
    car = geometry;
    scene.add( geometry );
}); 
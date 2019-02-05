function AddSun(scene){

    var light = new THREE.DirectionalLight(0xddd,1);
    light.position.set(0,1000,1);
    scene.add(light);
}
var hemiLight;


function AddLights(scene) {
    //Sun
    hemiLight = new THREE.HemisphereLight(0xeeeeee, 0xeeeeee, 1);
    hemiLight.position.set(0, 800, 0);
    scene.add(hemiLight);

    var spotlight = new THREE.SpotLight(0xeeeeee);
    spotlight.position.set(-40, 15, -30);
    spotlight.castShadow = true;
    spotlight.angle = THREE.Math.degToRad(45);
    spotlight.target.position.set(-40, 0, -40);

    spotlight.target.updateMatrixWorld();
    scene.add(spotlight.target);
    scene.add(spotlight);
}
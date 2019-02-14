var hemiLight;


function AddLights(scene) {
    //Sun
    hemiLight = new THREE.HemisphereLight(0xeeeeee, 0xeeeeee, 1);
    hemiLight.position.set(0, 800, 0);
    scene.add(hemiLight);
}
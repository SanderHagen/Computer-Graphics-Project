var hemiLight;
var streetLights = [];

function AddLights(scene) {
    //Sun
    hemiLight = new THREE.HemisphereLight(0xeeeeee, 0xeeeeee, 1);
    hemiLight.position.set(0, 800, 0);
    scene.add(hemiLight);


    for (var i = 0; i < 4; i++) {
        var spotlight = new THREE.SpotLight(0xeeeeee);
        spotlight.position.set(250 - (i * 150), 15, 30);
        spotlight.castShadow = true;
        spotlight.angle = THREE.Math.degToRad(45);
        spotlight.target.position.set(250 - (i * 150), 0, 21);

        scene.add(spotlight.target);
        scene.add(spotlight);

        streetLights.push(spotlight);
    }
}
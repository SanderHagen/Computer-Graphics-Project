
function animate() {
    requestAnimationFrame(animate);

    AnimateLights();
    MoveCar();

    renderer.render(scene, camera);
}

var movingBack = false;
var testValue = 0;
function MoveCar() {
    if (car !== undefined) {

        if (movingBack) {
            car.position.x -= 1;
        } else {
            car.position.x += 1;
        }
        if (car.position.x > 200) {
            movingBack = true;
            car.position.z = -10;
            car.rotateY(THREE.Math.degToRad(180));
        }
        if (car.position.x < -200) {
            movingBack = false;
            car.position.z = 10;
            car.rotateY(THREE.Math.degToRad(180));
        }
    }
}

var change = -0.001;
function AnimateLights() {
    hemiLight.intensity += change;

    if (hemiLight.intensity <= 0.1)
        change = 0.001;
    if (hemiLight.intensity >= 0.95)
        change = -0.001;

    if (hemiLight.intensity <= 0.4) {
        streetLights.forEach(streetlight => {
            streetlight.intensity = 0.6;
        });
    } else {
        streetLights.forEach(streetlight => {
            streetlight.intensity = 0.0;
        });
    }


}

animate();
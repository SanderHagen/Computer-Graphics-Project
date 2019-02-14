
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
            car.position.z -= 1;
        } else {
            car.position.z += 1;
        }
        if (car.position.z > 100) {
            movingBack = true;
            car.rotateY(THREE.Math.degToRad(180));
        }
        if (car.position.z < -100) {
            movingBack = false;
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

}

animate();
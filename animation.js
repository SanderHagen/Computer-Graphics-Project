
function animate() {
    requestAnimationFrame(animate);

    AnimateLights();

    renderer.render(scene, camera);
}

var change = -0.001;
function AnimateLights() {
    hemiLight.intensity += change;

    if (hemiLight.intensity <= 0.1)
        change = +0.001;
    if (hemiLight.intensity >= 0.95)
        change = -0.001;

}

animate();
function CreateControls(camera){
    var controls = new THREE.OrbitControls(camera);

    controls.scope = true;
    controls.autoRotate = false;
    controls.autoRotateSpeed = 2;
    controls.noKeys = false;
    return controls;
}


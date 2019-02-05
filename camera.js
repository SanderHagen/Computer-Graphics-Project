function CreateCamera(){
        // Create camera
    var camera = new THREE.PerspectiveCamera(
        75, // fov — Camera frustum vertical field of view.
        window.innerWidth/window.innerHeight, // aspect — Camera frustum aspect ratio.
        0.1, // near — Camera frustum near plane.
        10000); // far — Camera frustum far plane. 

    camera.position.x = 7;
    camera.position.y = 4;
    camera.position.z = 25;    
    return camera;
}

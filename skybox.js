function CreateSkyBox(scene) {
    var dir_names = ["skybox/posx.bmp", "skybox/negx.bmp", "skybox/posy.bmp", "skybox/negy.bmp", "skybox/posz.bmp", "skybox/negz.bmp"];
    var materialArray = [];
    for (var i = 0; i < 6; i++) {
        materialArray.push(
            new THREE.MeshPhongMaterial({
                map: THREE.ImageUtils.loadTexture(dir_names[i]),
                side: THREE.BackSide,
                emissive: 0x111111
            })
        );
    }

    var sky_geometry = new THREE.CubeGeometry(5000, 5000, 5000);
    var sky_material = new THREE.MeshFaceMaterial(materialArray);
    var skybox = new THREE.Mesh(sky_geometry, sky_material);
    scene.add(skybox);
}
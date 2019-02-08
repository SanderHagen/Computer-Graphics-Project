function AddSun(scene){

    hemiLight = new THREE.HemisphereLight( 0x0000ff, 0x00ff00, 0.6 ); 
    hemiLight.position.set(0,500,0);
    scene.add(hemiLight);
}
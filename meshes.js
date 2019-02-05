function CreateFloor(){
    var geometry = new THREE.BoxGeometry(1000,1,1000);

    // load a texture, set wrap mode to repeat
    var texture = new THREE.TextureLoader().load( "images/groundtexture.jpg" );
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set( 500, 500 );

    var material = new THREE.MeshBasicMaterial( {map: texture });
    var floor = new THREE.Mesh(geometry, material);
    return floor;
}
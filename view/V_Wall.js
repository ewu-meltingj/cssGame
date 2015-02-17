if(oso === undefined) {var oso = {};}

oso.View.prototype.renderWall = function(wall, scene, camera) {
	if(!wall.rendering)
		render();

	function render() {
		var geometry = new THREE.BoxGeometry(
			wall.dimension.width, 
			wall.dimension.height, 
			wall.dimension.depth
		);
		var material = new THREE.MeshLambertMaterial( { 
			color: 0xf3f324, 
			shading: THREE.FlatShading,
			map: THREE.ImageUtils.loadTexture('https://woundmagazine.files.wordpress.com/2012/09/6.jpg'),
			overdraw: 0.5
		});
		wall.rendering = new THREE.Mesh( geometry, material );
		wall.rendering.position.set(wall.position.x, wall.position.y, wall.position.z);
		wall.parent.rendering.add(wall.rendering);
	};
}
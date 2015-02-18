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
			shading: THREE.FlatShading,
			overdraw: 0.5
		});
		if(wall.texture) {
			material.map = THREE.ImageUtils.loadTexture(wall.texture);
		}
		else {
			material.transparent = true;
			material.opacity = 0;
		}
		wall.rendering = new THREE.Mesh( geometry, material );
		wall.rendering.position.set(wall.position.x, wall.position.y, wall.position.z);
		wall.parent.rendering.add(wall.rendering);
	};
}
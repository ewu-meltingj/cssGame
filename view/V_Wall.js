if(oso === undefined) {var oso = {};}

oso.View.prototype.renderWall = function(wall, scene, camera) {
	if(!wall.rendering)
		render();

	wall.rendering.position.x = wall.xCoord - wall.parent.xCoord + this.offset().x(wall);
	wall.rendering.position.y = wall.yCoord - wall.parent.yCoord + this.offset().y(wall);
	wall.rendering.position.z = wall.zCoord - wall.parent.zCoord + this.offset().z(wall);

	function render() {
		var geometry = new THREE.BoxGeometry(wall.width, wall.height, wall.depth);
		var material = new THREE.MeshLambertMaterial( { 
			color: 0xf3f324, 
			shading: THREE.FlatShading, 
			overdraw: 0.5
		});
		wall.rendering = new THREE.Mesh( geometry, material );

		wall.parent.rendering.add(wall.rendering);
		
	};
}
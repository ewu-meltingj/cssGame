if(oso === undefined) {var oso = {};}

oso.View.prototype.renderWorld = function(world, scene, camera) {
	if(!world.rendering)
		render();

	function render() {
		var geometry = new THREE.BoxGeometry(world.width, world.height, world.depth);
		var material = new THREE.MeshLambertMaterial( { 
			color: 0xffffff, 
			shading: THREE.FlatShading, 
			overdraw: 2.5
		});
		world.rendering = new THREE.Mesh( geometry, material );
		world.rendering.position.x = world.xCoord;
		world.rendering.position.y = world.yCoord;
		world.rendering.position.z = world.zCoord;

		scene.add(world.rendering);

	};
}
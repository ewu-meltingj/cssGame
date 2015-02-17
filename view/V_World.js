if(oso === undefined) {var oso = {};}

oso.View.prototype.renderWorld = function(world, scene, camera) {
	if(!world.rendering)
		render();

	function render() {
		var geometry = new THREE.BoxGeometry(
			world.dimension.width, 
			world.dimension.height, 
			world.dimension.depth
		);
		var material = new THREE.MeshLambertMaterial( { 
			color: 0xffffff, 
			shading: THREE.FlatShading, 
			map: THREE.ImageUtils.loadTexture('http://a1.dspnimg.com/data/l/900934129654_Lq8LXnxy_l.jpg'),
			overdraw: 2.5
		});
		world.rendering = new THREE.Mesh( geometry, material );
		world.rendering.position.x = world.position.x;
		world.rendering.position.y = world.position.y;
		world.rendering.position.z = world.position.z;

		scene.add(world.rendering);

	};
}
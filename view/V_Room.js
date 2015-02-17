if(oso === undefined) {var oso = {};}

oso.View.prototype.renderRoom = function(room, scene, camera) {
	if(!room.rendering)
		render();

	function render() {
		var geometry = new THREE.BoxGeometry(
			room.dimension.width, 
			room.dimension.height, 
			room.dimension.depth
		);
		var material = new THREE.MeshLambertMaterial( { 
			color: 0xff00dd, 
			shading: THREE.FlatShading,
			transparent: true,
			opacity: 0.2,
			overdraw: 0.5
		});
		room.rendering = new THREE.Mesh( geometry, material );

		room.rendering.position.x = room.position.x;
		room.rendering.position.y = room.position.y;
		room.rendering.position.z = room.position.z;

		room.parent.rendering.add(room.rendering);
	};
}
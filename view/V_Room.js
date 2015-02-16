if(oso === undefined) {var oso = {};}

oso.View.prototype.renderRoom = function(room, scene, camera) {
	if(!room.rendering)
		render();

	room.rendering.position.x = room.xCoord + this.offset().x(room);
	room.rendering.position.y = room.yCoord + this.offset().y(room);
	room.rendering.position.z = room.zCoord + this.offset().z(room);

	function render() {
		var geometry = new THREE.BoxGeometry(room.width, room.height, room.depth);
		var material = new THREE.MeshLambertMaterial( { 
			color: 0xff00dd, 
			shading: THREE.FlatShading,
			transparent: true,
			opacity: 0.2,
			overdraw: 0.5
		});
		room.rendering = new THREE.Mesh( geometry, material );

		room.parent.rendering.add(room.rendering);
	};
}
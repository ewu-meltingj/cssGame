if(oso === undefined) {var oso = {};}

oso.View.prototype.renderPerson = function(person, scene, camera) {
	if(!person.rendering)
		render();

	person.rendering.position.x = person.xCoord + this.offset().x(person);
	person.rendering.position.y = person.yCoord + this.offset().y(person);
	person.rendering.position.z = person.zCoord + this.offset().z(person);

	function render() {
		var geometry = new THREE.BoxGeometry(person.width, person.height, person.depth);
		var material = new THREE.MeshLambertMaterial( { 
			color: 0xff5533, 
			shading: THREE.FlatShading, 
			overdraw: 0.5
		});
		person.rendering = new THREE.Mesh( geometry, material );
		
		person.parent.rendering.add(person.rendering);
	};
}
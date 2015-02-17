if(oso === undefined) {var oso = {};}

oso.View.prototype.renderPerson = function(person, scene, camera) {
	if(!person.rendering)
		render();

	person.rendering.position.x = person.position.x;
	person.rendering.position.y = person.position.y;
	person.rendering.position.z = person.position.z;

	function render() {
		var geometry = new THREE.BoxGeometry(person.width, person.height, person.depth);
		var material = new THREE.MeshLambertMaterial( { 
			color: 0xff5533, 
			shading: THREE.FlatShading, 
			overdraw: 0.5
		});
		person.rendering = new THREE.Mesh( geometry, material );
		person.rendering.add(camera);

		person.rendering.position.x = person.position.x;
		person.rendering.position.y = person.position.y;
		person.rendering.position.z = person.position.z;
		
		person.parent.rendering.add(person.rendering);
	};
}
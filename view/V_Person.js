if(oso === undefined) {var oso = {};}

oso.View.prototype.renderPerson = function(person, scene, camera) {
	if(!person.rendering)
		render();

	person.rendering.position.x = person.position.x;
	person.rendering.position.y = person.position.y;
	person.rendering.position.z = person.position.z;
	person.rendering.rotation.y = person.rotation.radian();

	function render() {
		var geometry = new THREE.BoxGeometry(
			person.dimension.width, 
			person.dimension.height, 
			person.dimension.depth
		);
		var material = new THREE.MeshLambertMaterial( { 
			color: 0xff5533, 
			shading: THREE.FlatShading, 
			overdraw: 0.5
		});
		person.rendering = new THREE.Mesh( geometry, material );
		person.rendering.add(camera);
		camera.lookAt(person.rendering.position);

		person.rendering.position.x = person.position.x;
		person.rendering.position.y = person.position.y;
		person.rendering.position.z = person.position.z;
		
		person.parent.rendering.add(person.rendering);
	};
}
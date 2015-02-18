if(oso === undefined) {var oso = {};}

oso.Controller = function (view, person, world) {
	window.onkeydown = function(e) {
	 	var key = e.keyCode ? e.keyCode : e.which;

	 	if (key == 65) {//left
	 		person.target = new oso.Point(
	 			-40 + person.position.x,
	 			person.position.y,
	 			person.position.z
	 		);
	 		// person.target = target;
			// person.rotation.translate(+5);
			person.hasChanged = true;
			
	 	}
		else if (key == 87) {//up 
			person.target = new oso.Point(
	 			person.position.x,
	 			person.position.y,
	 			-40 + person.position.z
	 		);
			// person.target = person.rotation.rotate(-20, person.position);
			person.hasChanged = true;

		}
		else if (key == 68) {//right
			person.target = new oso.Point(
	 			+40 + person.position.x,
	 			person.position.y,
	 			person.position.z
	 		);
			// person.rotation.translate(-5);
			person.hasChanged = true;

		}
		else if (key == 83) {//down
			person.target = new oso.Point(
	 			person.position.x,
	 			person.position.y,
	 			+40 + person.position.z
	 		);
			// person.target = person.rotation.rotate(+20, person.position);
			person.hasChanged = true;

		}
		else if (key == 32) {// space
			person.target = new oso.Point(
				person.position.x,
				+60 + person.position.y, 
				person.position.z
			);
			person.hasChanged = true;

		}
		else;
	}
}
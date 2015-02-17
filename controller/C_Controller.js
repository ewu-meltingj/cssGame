if(oso === undefined) {var oso = {};}

oso.Controller = function (view, person, world) {
	window.onkeydown = function(e) {
	 	var key = e.keyCode ? e.keyCode : e.which;

	 	if (key == 37) {//left
			person.target = new oso.Point(
				-20 + person.position.x,
				person.position.y, 
				person.position.z
			);
			person.hasChanged = true;
			
	 	}
		else if (key == 38) {//up 
			person.target = new oso.Point(
				person.position.x,
				person.position.y, 
				-20 + person.position.z
			);
			person.hasChanged = true;

		}
		else if (key == 39) {//right
			person.target = new oso.Point(
				+20 + person.position.x,
				person.position.y, 
				person.position.z
			);
			person.hasChanged = true;

		}
		else if (key == 40) {//down
			person.target = new oso.Point(
				person.position.x,
				person.position.y, 
				+20 + person.position.z
			);
			person.hasChanged = true;

		}
		else if (key == 90) {// z
			view.rotateCamera(true);
		}
		else if (key == 88) {// x
			view.rotateCamera();
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
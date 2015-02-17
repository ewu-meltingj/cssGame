if(oso === undefined) {var oso = {};}

oso.Controller = function (view, person, world) {
	window.onkeydown = function(e) {
	 	var key = e.keyCode ? e.keyCode : e.which;

	 	if (key == 65) {//left
			person.target = new oso.Point(
				-20 + person.position.x,
				person.position.y, 
				person.position.z
			);
			person.hasChanged = true;
			
	 	}
		else if (key == 87) {//up 
			person.target = new oso.Point(
				person.position.x,
				person.position.y, 
				-20 + person.position.z
			);
			person.hasChanged = true;

		}
		else if (key == 68) {//right
			person.target = new oso.Point(
				+20 + person.position.x,
				person.position.y, 
				person.position.z
			);
			person.hasChanged = true;

		}
		else if (key == 83) {//down
			person.target = new oso.Point(
				person.position.x,
				person.position.y, 
				+20 + person.position.z
			);
			person.hasChanged = true;

		}
		else if (key == 37) {// z
			view.rotateCameraY(true);
		}
		else if (key == 39) {// x
			view.rotateCameraY();
		}
		else if (key == 38) {// z
			view.rotateCameraX(true);
		}
		else if (key == 40) {// x
			view.rotateCameraX();
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
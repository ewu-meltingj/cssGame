if(oso === undefined) {var oso = {};}

oso.Controller = function (view, person, world) {
	window.onkeydown = function(e) {
	 	var key = e.keyCode ? e.keyCode : e.which;

	 	if (key == 37) {//left
			// console.log("left");
			person.moveIn(world, -6, 0, 0);
	 	}
		else if (key == 38) {//up 
			// console.log("down");
			person.moveIn(world, 0, 0, -6);
		}
		else if (key == 39) {//right
			// console.log("right");
			person.moveIn(world, +6, 0, 0);
		}
		else if (key == 40) {//down
			// console.log("up");
			person.moveIn(world, 0, 0, +6);
		}
		else if (key == 90) {// z
			// console.log("rotate left");
			view.rotateCamera(true);
		}
		else if (key == 88) {// x
			// console.log("rotate right");
			view.rotateCamera();
		}
		else if (key == 32) {// space
			// console.log("jump");
			person.moveIn(world, 0, +81, 0);
		}
		else;
	}
}
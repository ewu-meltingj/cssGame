function Control (person, world) {
	window.onkeydown = function(e) {
	 	var key = e.keyCode ? e.keyCode : e.which;

	 	if (key == 37) {//left
			// console.log("left");
			person.moveIn(world, -5, 0);
	 	}
		else if (key == 38) {//up 
			// console.log("up");
			person.moveIn(world, 0, -5);
		}
		else if (key == 39) {//right
			// console.log("right");
			person.moveIn(world, +5, 0);
		}
		else if (key == 40) {//down
			// console.log("down");
			person.moveIn(world, 0, +5);
		}
	}
}
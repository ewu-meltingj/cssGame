function Control (person, world) {
	window.onkeydown = function(e) {
	 	var key = e.keyCode ? e.keyCode : e.which;

	 	if (key == 37) //left
			person.moveIn(world, -5, 0);
		else if (key == 38) //up
			person.moveIn(world, 0, -5);
		else if (key == 39) //right
			person.moveIn(world, +5, 0);
		else if (key == 40) //down
			person.moveIn(world, 0, +5);
	}
}
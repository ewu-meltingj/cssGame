function Control (person, world) {
	window.onkeydown = function(e) {
	 	var key = e.keyCode ? e.keyCode : e.which;

	 	if (key == 37) //left
			person.move(world, -5, 0);
		else if (key == 38) //up
			person.move(world, 0, -5);
		else if (key == 39) //right
			person.move(world, +5, 0);
		else if (key == 40) //down
			person.move(world, 0, +5);
	}
}
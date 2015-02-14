function Control (person) {
	window.onkeydown = function(e) {
	 	var key = e.keyCode ? e.keyCode : e.which;

	 	if (key == 37) //left
			person.move(-5, 0);
		else if (key == 38) //up
			person.move(0, -5);
		else if (key == 39) //right
			person.move(+5, 0);
		else if (key == 40) //down
			person.move(0, +5);
	}

	this.person = person;
}
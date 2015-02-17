if(oso === undefined) {var oso = {};}

oso.Observer.prototype.updatePerson = function(person, delta) {
	if(!person.position.equals(person.target)) {
		person.moveIn(
			this.world, 
			computeX()/10000 * delta, 
			computeY()/10000 * delta, 
			computeZ()/10000 * delta
		);
		this.view.render(person);
	}
	else if(!this.world.contains(person)) {
		person.target = new oso.Point(
			person.position.x,
			-60 + person.position.y, 
			person.position.z
		);
	}
	else {
		person.hasChanged = false;
		this.updateChildren(person, delta);
	}

	function computeX() {
		return clean(person.target.x - person.position.x);
	}

	function computeY() {
		return clean(person.target.y - person.position.y);
	}

	function computeZ() {
		return clean(person.target.z - person.position.z);
	}
	function clean(value) {
		var pos = Math.abs(value)/value;
		if(!pos)
			pos = 0;
		return pos;
	}
}
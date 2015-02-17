if(oso === undefined) {var oso = {};}

oso.Observer.prototype.updateDoor = function(door, delta) {
	door.hasChanged = false;
	this.updateChildren(door, delta);
};
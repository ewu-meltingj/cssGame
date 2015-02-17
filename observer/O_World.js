if(oso === undefined) {var oso = {};}

oso.Observer.prototype.updateWorld = function(world, delta) {
	world.hasChanged = false;
	this.updateChildren(world, delta);
};
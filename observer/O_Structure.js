if(oso === undefined) {var oso = {};}

oso.Observer.prototype.updateStructure = function(structure, delta) {
	structure.hasChanged = false;
	this.updateChildren(structure, delta);
};
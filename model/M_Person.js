if(oso === undefined) {var oso = {};}

// Person Model
oso.Person = function (name, width, height, depth, xCoord, yCoord, zCoord) {
	this.name = name;
	oso.A_Entity.call(this, width, height, depth, xCoord, yCoord, zCoord, "Person");
}
oso.Person.prototype.addEntity = function(entity) {
	oso.A_Entity.prototype.addEntity.call(this, entity);
};
oso.Person.prototype.contains = function(entity) {
	return oso.A_Entity.prototype.contains.call(this, entity);
};
oso.Person.prototype.interactWith = function(entity, x, y, z) {
};
oso.Person.prototype.render = function(view, scene, camera) {
	view.renderPerson(this, scene, camera);
};
oso.Person.prototype.update = function(observer) {
	observer.updatePerson(this);
};
oso.Person.prototype.moveIn = function(entity, x, y, z) {
	oso.A_Entity.prototype.moveIn.call(this, entity, x, y, z);
};

oso.Person.prototype.increaseVelocity = function() {
	return oso.A_Entity.prototype.increaseVelocity.call(this);
};
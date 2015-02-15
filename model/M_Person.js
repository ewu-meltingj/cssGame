if(oso === undefined) {var oso = {};}

// Person Model
oso.Person = function (name, width, height, xCoord, yCoord, zCoord) {
	this.name = name;
	oso.A_Entity.call(this, width, height, xCoord, yCoord, zCoord, "Person");
}
oso.Person.prototype.addEntity = function(entity) {
	oso.A_Entity.prototype.addEntity.call(this, entity);
};
oso.Person.prototype.contains = function(entity) {
	return oso.A_Entity.prototype.contains.call(this, entity);
};
oso.Person.prototype.interactWith = function(entity, x, y) {
};
oso.Person.prototype.moveIn = function(entity, x, y) {
	this.xCoord += x;
	this.yCoord += y;
	entity.interactWith(this, x, y);
	entity.hasChanged = true;
};
oso.Person.prototype.render = function(view) {
	view.renderPerson(this);
};
oso.Person.prototype.update = function(observer) {
	observer.updatePerson(this);
};
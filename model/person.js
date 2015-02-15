// Person Model
function Person(name, width, height, xCoord, yCoord, zCoord) {
	this.name = name;
	A_Entity.call(this, width, height, xCoord, yCoord, zCoord, "Person");
}
Person.prototype.addEntity = function(entity) {
	A_Entity.prototype.addEntity.call(this, entity);
};
Person.prototype.contains = function(entity) {
	return A_Entity.prototype.contains.call(this, entity);
};
Person.prototype.interactWith = function(entity, x, y) {
};
Person.prototype.moveIn = function(entity, x, y) {
	this.xCoord += x;
	this.yCoord += y;
	entity.interactWith(this, x, y);
	entity.hasChanged = true;
};
Person.prototype.render = function(view) {
	view.renderPerson(this);
};
Person.prototype.update = function(observer) {
	observer.updatePerson(this);
};
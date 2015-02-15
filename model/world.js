// World Model
function World(name, width, height) {
	this.name = name;
	A_Entity.call(this, width, height, 0, 0, 0, "world");
}
World.prototype.addEntity = function(entity) {
	A_Entity.prototype.addEntity.call(this, entity);
};
World.prototype.contains = function(entity) {
	return A_Entity.prototype.contains.call(this, entity);
};
World.prototype.interactWith = function(entity, x, y) {
	A_Entity.prototype.interactWith.call(this, entity, x, y);
};
World.prototype.render = function(view) {
	view.renderWorld(this);
};
World.prototype.update = function(observer) {
	observer.updateWorld(this);
};
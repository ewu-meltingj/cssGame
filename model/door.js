// Door Model
function Door(width, height, xCoord, yCoord, zCoord) {
	A_Entity.call(this, width, height, xCoord, yCoord, zCoord, "Door");
}
Door.prototype.addEntity = function(entity) {
	A_Entity.prototype.addEntity.call(this, entity);
};
Door.prototype.contains = function(entity) {
	return A_Entity.prototype.contains.call(this, entity);
};
Door.prototype.interactWith = function(entity, x, y) {
	if(this.contains(entity)) {
		A_Entity.prototype.interactWith.call(this, entity, x, y);
	}
};
Door.prototype.render = function(view) {
	view.renderDoor(this);
};
Door.prototype.update = function(observer) {
	observer.updateDoor(this);
};
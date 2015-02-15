// Wall Model
function Wall(width, height, xCoord, yCoord, zCoord) {
	A_Entity.call(this, width, height, xCoord, yCoord, zCoord, "Wall");
}
Wall.prototype.addEntity = function(entity) {
	A_Entity.prototype.addEntity.call(this, entity);
};
Wall.prototype.contains = function(entity) {
	return A_Entity.prototype.contains.call(this, entity);
};
Wall.prototype.interactWith = function(entity, x, y) {
	if(this.contains(entity)) {
		entity.xCoord += x*-1;
		entity.yCoord += y*-1;
		A_Entity.prototype.interactWith.call(this, entity, x, y);
	}
};
Wall.prototype.render = function(view) {
	view.renderStructure(this);
};
Wall.prototype.update = function(observer) {
	observer.updateStructure(this);
};
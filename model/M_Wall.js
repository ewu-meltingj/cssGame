if(oso === undefined) {var oso = {};}

// Wall Model
oso.Wall = function (width, height, xCoord, yCoord, zCoord) {
	oso.A_Entity.call(this, width, height, xCoord, yCoord, zCoord, "Wall");
}
oso.Wall.prototype.addEntity = function(entity) {
	oso.A_Entity.prototype.addEntity.call(this, entity);
};
oso.Wall.prototype.contains = function(entity) {
	return oso.A_Entity.prototype.contains.call(this, entity);
};
oso.Wall.prototype.interactWith = function(entity, x, y) {
	if(this.contains(entity)) {
		entity.xCoord += x*-1;
		entity.yCoord += y*-1;
		oso.A_Entity.prototype.interactWith.call(this, entity, x, y);
	}
};
oso.Wall.prototype.render = function(view) {
	view.renderStructure(this);
};
oso.Wall.prototype.update = function(observer) {
	observer.updateStructure(this);
};
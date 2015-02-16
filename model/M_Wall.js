if(oso === undefined) {var oso = {};}

// Wall Model
oso.Wall = function (width, height, depth, xCoord, yCoord, zCoord) {
	oso.A_Entity.call(this, width, height, depth, xCoord, yCoord, zCoord, "Wall");
}
oso.Wall.prototype.addEntity = function(entity) {
	oso.A_Entity.prototype.addEntity.call(this, entity);
};
oso.Wall.prototype.contains = function(entity) {
	return oso.A_Entity.prototype.contains.call(this, entity);
};
oso.Wall.prototype.interactWith = function(entity, x, y, z) {
	if(this.contains(entity)) {
		console.log("boomer wall");
		entity.xCoord += x*-1;
		entity.zCoord += z*-1;
		oso.A_Entity.prototype.interactWith.call(this, entity, x, y, z);
	}
};
oso.Wall.prototype.render = function(view, scene, camera) {
	view.renderWall(this, scene, camera);
};
oso.Wall.prototype.update = function(observer) {
	observer.updateStructure(this);
};
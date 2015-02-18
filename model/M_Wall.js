if(oso === undefined) {var oso = {};}

// Wall Model
oso.Wall = function (width, height, depth, xCoord, yCoord, zCoord, texture) {
	oso.A_Entity.call(this, width, height, depth, xCoord, yCoord, zCoord, "Wall", texture);
}
oso.Wall.prototype.addEntity = function(entity) {
	oso.A_Entity.prototype.addEntity.call(this, entity);
};
oso.Wall.prototype.contains = function(entity) {
	return oso.A_Entity.prototype.contains.call(this, entity);
};
oso.Wall.prototype.interactWith = function(entity, x, y, z) {
	if(this.contains(entity)) {
		entity.target = new oso.Point(
			entity.position.x + (x * -1000), 
			entity.position.y + (y * -1000), 
			entity.position.z + (z * -1000)
		);
		oso.A_Entity.prototype.interactWith.call(this, entity, x, y, z);
	}
};
oso.Wall.prototype.render = function(view, scene, camera) {
	view.renderWall(this, scene, camera);
};
oso.Wall.prototype.update = function(observer) {
	observer.updateStructure(this);
};
oso.Wall.prototype.getAbsX = function(entity) {
	return oso.A_Entity.prototype.getAbsX.call(this, entity);
};
oso.Wall.prototype.getAbsY = function(entity) {
	return oso.A_Entity.prototype.getAbsY.call(this, entity);
};
oso.Wall.prototype.getAbsZ = function(entity) {
	return oso.A_Entity.prototype.getAbsZ.call(this, entity);
};
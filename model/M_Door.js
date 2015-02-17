if(oso === undefined) {var oso = {};}

// Door Model
oso.Door = function (width, height, depth, xCoord, yCoord, zCoord) {
	oso.A_Entity.call(this, width, height, depth, xCoord, yCoord, zCoord, "Door");
}
oso.Door.prototype.addEntity = function(entity) {
	oso.A_Entity.prototype.addEntity.call(this, entity);
};
oso.Door.prototype.contains = function(entity) {
	return oso.A_Entity.prototype.contains.call(this, entity);
};
oso.Door.prototype.interactWith = function(entity, x, y, z) {
	if(this.contains(entity))
		oso.A_Entity.prototype.interactWith.call(this, entity, x, y, z);
};
oso.Door.prototype.render = function(view, scene, camera) {
	view.renderDoor(this, scene, camera);
};
oso.Door.prototype.update = function(observer) {
	observer.updateDoor(this, delta);
};
oso.Door.prototype.getAbsolute = function(entity) {
	return oso.A_Entity.prototype.getAbsolute.call(this, entity);
};
oso.Door.prototype.getAbsolute = function(entity) {
	return oso.A_Entity.prototype.getAbsolute.call(this, entity);
};
oso.Door.prototype.getAbsX = function(entity) {
	return oso.A_Entity.prototype.getAbsX.call(this, entity);
};
oso.Door.prototype.getAbsY = function(entity) {
	return oso.A_Entity.prototype.getAbsY.call(this, entity);
};
oso.Door.prototype.getAbsZ = function(entity) {
	return oso.A_Entity.prototype.getAbsZ.call(this, entity);
};
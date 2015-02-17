if(oso === undefined) {var oso = {};}

// Room Model
oso.Room = function (width, height, depth, xCoord, yCoord, zCoord) {
	oso.A_Entity.call(this, width, height, depth, xCoord, yCoord, zCoord, "Room");

	var wallWidth = 10;

	var leftPos = width/2 - width + wallWidth/2;
	var rightPos = width/2 - wallWidth/2;
	var backPos = depth/2 - depth - wallWidth/2;

	this.addEntity(new oso.Wall(wallWidth, height, depth, leftPos, 0, 0));
	this.addEntity(new oso.Wall(wallWidth, height, depth, rightPos, 0, 0));
	this.addEntity(new oso.Wall(width, height, wallWidth, 0, 0, backPos));

}
oso.Room.prototype.addEntity = function(entity) {
	oso.A_Entity.prototype.addEntity.call(this, entity);
};
oso.Room.prototype.contains = function(entity) {
	return oso.A_Entity.prototype.contains.call(this, entity);
};
oso.Room.prototype.interactWith = function(entity, x, y, z) {
	if(this.contains(entity)) {
		// oso.A_Entity.prototype.doeslift.call(this, entity, y);
		oso.A_Entity.prototype.interactWith.call(this, entity, x, y, z);
	}
};
oso.Room.prototype.render = function(view, scene, camera) {
	view.renderRoom(this, scene, camera);
};
oso.Room.prototype.update = function(observer) {
	observer.updateStructure(this);
};
oso.Room.prototype.getAbsX = function(entity) {
	return oso.A_Entity.prototype.getAbsX.call(this, entity);
};
oso.Room.prototype.getAbsY = function(entity) {
	return oso.A_Entity.prototype.getAbsY.call(this, entity);
};
oso.Room.prototype.getAbsZ = function(entity) {
	return oso.A_Entity.prototype.getAbsZ.call(this, entity);
};
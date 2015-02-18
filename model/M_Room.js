if(oso === undefined) {var oso = {};}

// Room Model
oso.Room = function (width, height, depth, xCoord, yCoord, zCoord, texture) {
	oso.A_Entity.call(this, width, height, depth, xCoord, yCoord, zCoord, texture);

	this.addWalls(10);
}
oso.Room.prototype.addEntity = function(entity) {
	oso.A_Entity.prototype.addEntity.call(this, entity);
};
oso.Room.prototype.contains = function(entity) {
	return oso.A_Entity.prototype.contains.call(this, entity);
};
oso.Room.prototype.interactWith = function(entity, x, y, z) {
	if(this.contains(entity))
		oso.A_Entity.prototype.interactWith.call(this, entity, x, y, z);
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

oso.Room.prototype.addWalls = function(wallWidth) {
	var width = this.dimension.width;
	var height = this.dimension.height;
	var depth = this.dimension.depth;
	var doorWidth = 100;

	var back = depth/2 - depth;
	var left = -(width + wallWidth)/2 + wallWidth;
	var right = (width - wallWidth)/2;
	var front = (depth - wallWidth)/2;
	var leftFront = -(width - doorWidth)/2;
	var rightFront = (width - doorWidth)/2;
	var top = (height - wallWidth)/2;

	var wallTexture = "assets/images/wall.jpg";

	this.addEntity(new oso.Wall(width, height, wallWidth, 0, 0, back, wallTexture)); //backwall
	this.addEntity(new oso.Wall(wallWidth, height, depth - wallWidth/2, left, 0, 0, wallTexture)); //leftwall
	this.addEntity(new oso.Wall(wallWidth, height, depth - wallWidth/2, right, 0, 0, wallTexture));//rightwall
	this.addEntity(new oso.Wall(width/2 - doorWidth/2, height, wallWidth, leftFront, 0, front, wallTexture)); //frontLeftwall
	this.addEntity(new oso.Wall(width/2 - doorWidth/2, height, wallWidth, rightFront, 0, front, wallTexture)); //frontRightwall
	this.addEntity(new oso.Wall(width, wallWidth, depth, 0, top, 0, wallTexture)); //topwall
};
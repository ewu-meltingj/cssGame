if(oso === undefined) {var oso = {};}

// Room Model
oso.Room = function (width, height, depth, xCoord, yCoord, zCoord) {
	oso.A_Entity.call(this, width, height, depth, xCoord, yCoord, zCoord, "Room");

	var wallWidth = 10;

	this.addEntity(new oso.Wall(wallWidth, height, depth, 0, 0, 0));
	this.addEntity(new oso.Wall(wallWidth, height, depth, width - wallWidth, 0, 0));
	this.addEntity(new oso.Wall(width, height, wallWidth, 0, 0, 0));

}
oso.Room.prototype.addEntity = function(entity) {
	oso.A_Entity.prototype.addEntity.call(this, entity);
};
oso.Room.prototype.contains = function(entity) {
	return oso.A_Entity.prototype.contains.call(this, entity);
};
oso.Room.prototype.interactWith = function(entity, x, y, z) {
	if(this.contains(entity)) {
		console.log("inside room");
		oso.A_Entity.prototype.interactWith.call(this, entity, x, y, z);
	}
};
oso.Room.prototype.render = function(view, scene, camera) {
	view.renderRoom(this, scene, camera);
};
oso.Room.prototype.update = function(observer) {
	observer.updateStructure(this);
};
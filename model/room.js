// Room Model
function Room(width, height, xCoord, yCoord, zCoord) {
	A_Entity.call(this, width, height, xCoord, yCoord, zCoord, "Room");

	this.addEntity(new Wall(width, 5, xCoord, yCoord, zCoord));
	this.addEntity(new Wall(width/2 - 20, 5, xCoord, yCoord + this.height - 5, zCoord));
	this.addEntity(new Wall(width/2 - 20, 5, xCoord + width/2 + 20, yCoord + this.height - 5, zCoord));
	this.addEntity(new Wall(5, height, xCoord, yCoord, zCoord));
	this.addEntity(new Wall(5, height, xCoord + this.width, yCoord, zCoord));
	this.addEntity(new Door(40, 5, xCoord + width/2 - 20, yCoord + this.height - 5, zCoord));
}
Room.prototype.addEntity = function(entity) {
	A_Entity.prototype.addEntity.call(this, entity);
};
Room.prototype.contains = function(entity) {
	return A_Entity.prototype.contains.call(this, entity);
};
Room.prototype.interactWith = function(entity, x, y) {
	if(this.contains(entity)) {
		A_Entity.prototype.interactWith.call(this, entity, x, y);
	}
};
Room.prototype.render = function(view) {
	view.renderRoom(this);
};
Room.prototype.update = function(observer) {
	observer.updateStructure(this);
};
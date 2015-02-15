if(oso === undefined) {var oso = {};}

// Room Model
oso.Room = function (width, height, xCoord, yCoord, zCoord) {
	oso.A_Entity.call(this, width, height, xCoord, yCoord, zCoord, "Room");

	this.addEntity(new oso.Wall(width, 5, xCoord, yCoord, zCoord));
	this.addEntity(new oso.Wall(width/2 - 20, 5, xCoord, yCoord + this.height - 5, zCoord));
	this.addEntity(new oso.Wall(width/2 - 20, 5, xCoord + width/2 + 20, yCoord + this.height - 5, zCoord));
	this.addEntity(new oso.Wall(5, height, xCoord, yCoord, zCoord));
	this.addEntity(new oso.Wall(5, height, xCoord + this.width, yCoord, zCoord));
	this.addEntity(new oso.Door(40, 5, xCoord + width/2 - 20, yCoord + this.height - 5, zCoord));
}
oso.Room.prototype.addEntity = function(entity) {
	oso.A_Entity.prototype.addEntity.call(this, entity);
};
oso.Room.prototype.contains = function(entity) {
	return oso.A_Entity.prototype.contains.call(this, entity);
};
oso.Room.prototype.interactWith = function(entity, x, y) {
	if(this.contains(entity)) {
		oso.A_Entity.prototype.interactWith.call(this, entity, x, y);
	}
};
oso.Room.prototype.render = function(view) {
	view.renderRoom(this);
};
oso.Room.prototype.update = function(observer) {
	observer.updateStructure(this);
};
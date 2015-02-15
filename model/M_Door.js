if(oso === undefined) {var oso = {};}

// Door Model
oso.Door = function (width, height, xCoord, yCoord, zCoord) {
	oso.A_Entity.call(this, width, height, xCoord, yCoord, zCoord, "Door");
}
oso.Door.prototype.addEntity = function(entity) {
	oso.A_Entity.prototype.addEntity.call(this, entity);
};
oso.Door.prototype.contains = function(entity) {
	return oso.A_Entity.prototype.contains.call(this, entity);
};
oso.Door.prototype.interactWith = function(entity, x, y) {
	if(this.contains(entity)) {
		oso.A_Entity.prototype.interactWith.call(this, entity, x, y);
	}
};
oso.Door.prototype.render = function(view) {
	view.renderDoor(this);
};
oso.Door.prototype.update = function(observer) {
	observer.updateDoor(this);
};
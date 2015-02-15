if(oso === undefined) {var oso = {};}

// World Model
oso.World = function (name, width, height) {
	this.name = name;
	oso.A_Entity.call(this, width, height, 0, 0, 0, "world");
}
oso.World.prototype.addEntity = function(entity) {
	oso.A_Entity.prototype.addEntity.call(this, entity);
};
oso.World.prototype.contains = function(entity) {
	return oso.A_Entity.prototype.contains.call(this, entity);
};
oso.World.prototype.interactWith = function(entity, x, y) {
	oso.A_Entity.prototype.interactWith.call(this, entity, x, y);
};
oso.World.prototype.render = function(view) {
	view.renderWorld(this);
};
oso.World.prototype.update = function(observer) {
	observer.updateWorld(this);
};
if(oso === undefined) {var oso = {};}

// World Model
oso.World = function (name, width, height, depth) {
	this.name = name;
	oso.A_Entity.call(this, width, height, depth, 0, 0, 0, "world"); // 000 => xyz coords

	var wallWidth = 10;
	var wallHeight = 832;

	var backPos = depth/2 - depth - wallWidth/2;
	var floorPos = -height/2 + wallHeight/2;

	var texture = "assets/images/backdrop.jpg";

	this.addEntity(new oso.Wall(width, wallHeight, wallWidth, 0, floorPos, backPos, texture)); //backwall

}
oso.World.prototype.addEntity = function(entity) {
	oso.A_Entity.prototype.addEntity.call(this, entity);
};
oso.World.prototype.contains = function(entity) {
	return oso.A_Entity.prototype.contains.call(this, entity);
};
oso.World.prototype.interactWith = function(entity, x, y, z) {
	oso.A_Entity.prototype.interactWith.call(this, entity, x, y, z);
};
oso.World.prototype.render = function(view, scene, camera) {
	view.renderWorld(this, scene, camera);
};
oso.World.prototype.update = function(observer) {
	observer.updateWorld(this);
};
oso.World.prototype.getAbsX = function(entity) {
	return oso.A_Entity.prototype.getAbsX.call(this, entity);
};
oso.World.prototype.getAbsY = function(entity) {
	return oso.A_Entity.prototype.getAbsY.call(this, entity);
};
oso.World.prototype.getAbsZ = function(entity) {
	return oso.A_Entity.prototype.getAbsZ.call(this, entity);
};
if(oso === undefined) {var oso = {};}

// World Model
oso.World = function (name, width, height, depth, texture) {
	this.name = name;
	oso.A_Entity.call(this, width, height, depth, 0, 0, 0, texture); // 000 => xyz coords

	var wallWidth = 10;
	var wallHeight = 832;

	var backPos = -(depth + wallWidth)/2;
	var floor = (-height + wallHeight)/2;
	var left = -(width + wallWidth)/2 + wallWidth;
	var right = (width - wallWidth)/2;
	// var backPos = -(depth + wallWidth)/2;

	var texture = "assets/images/backdrop.jpg";
	this.addEntity(new oso.Wall(width, wallHeight, wallWidth, 0, floor, backPos, texture)); //backwall
	this.addEntity(new oso.Wall(wallWidth, wallHeight, depth, left, 0, 0)); //leftwall
	this.addEntity(new oso.Wall(wallWidth, wallHeight, depth, right, 0, 0));//rightwall
	this.addEntity(new oso.Wall(width, wallHeight, wallWidth, 0, 0, -backPos));//rightwall



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
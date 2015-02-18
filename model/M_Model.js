if(oso === undefined) {var oso = {};}

oso.uniqueID = (function () {
	var counter;
	return {
		getID: function() {
			if (!counter)
				counter = 0;
			return counter++;
		}
	};
})();

// A_Entity Model
oso.A_Entity = function (width, height, depth, xCoord, yCoord, zCoord, texture) {
	this.id = oso.uniqueID.getID();
	this.dimension = new oso.Dimension(width, height, depth);
	this.position = new oso.Point(xCoord, yCoord, zCoord)
	this.target = new oso.Point(xCoord, yCoord, zCoord);
	this.hasChanged = true;
	this.isGrounded = true;
	this.parent = null;
	this.rendering = null;
	this.texture = texture;
	this.List_children = [];
}

oso.A_Entity.prototype.getAbsX = function() {
	while(this.parent)
		return oso.A_Entity.prototype.getAbsX.call(this.parent) + this.position.x;
	return this.position.x;
}

oso.A_Entity.prototype.getAbsY = function() {
	while(this.parent)
		return oso.A_Entity.prototype.getAbsY.call(this.parent) + this.position.y;
	return this.position.y;
}

oso.A_Entity.prototype.getAbsZ = function() {
	while(this.parent)
		return oso.A_Entity.prototype.getAbsZ.call(this.parent) + this.position.z;
	return this.position.z;
}

oso.A_Entity.prototype.contains = function(entity) {
	var contains = !(
		entity.getAbsX() + entity.dimension.width/2  < this.getAbsX() - this.dimension.width/2 || 
		entity.getAbsX() - entity.dimension.width/2  > this.getAbsX() + this.dimension.width/2 ||
		entity.getAbsY() + entity.dimension.height/2 < this.getAbsY() - this.dimension.height/2 || 
		entity.getAbsY() - entity.dimension.height/2 > this.getAbsY() + this.dimension.height/2 || 
		entity.getAbsZ() + entity.dimension.depth/2  < this.getAbsZ() - this.dimension.depth/2 || 
		entity.getAbsZ() - entity.dimension.depth/2  > this.getAbsZ() + this.dimension.depth/2
	);
	return contains;
};
oso.A_Entity.prototype.addEntity = function(entity) {
	entity.parent = this;
	this.List_children.push(entity);
};
oso.A_Entity.prototype.moveIn = function(x, y, z) {
	this.position.x += x;
	this.position.y += y;
	this.position.z += z;

	var temp = this;
	while(temp.parent) {
		temp = temp.parent;
	}
	
	temp.interactWith(this, x, y, z);
	this.hasChanged = true;
};
oso.A_Entity.prototype.interactWith = function(entity, x, y, z) {
	var childrenLenth = this.List_children.length;
	for(var i = 0; i < childrenLenth; i++) {
		this.List_children[i].interactWith(entity, x, y, z);
	}
};
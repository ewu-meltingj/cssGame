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
oso.A_Entity = function (width, height, depth, xCoord, yCoord, zCoord, entityType) {
	this.id = oso.uniqueID.getID();
	this.width = width;
	this.height = height;
	this.depth = depth;
	this.position = new oso.Point(xCoord, yCoord, zCoord)
	this.target = new oso.Point(xCoord, yCoord, zCoord);
	this.isSolid = false;
	this.hasChanged = true;
	this.velocity = 0;
	this.entityType = entityType;
	this.isOnGround = true;
	this.parent = null;
	this.rendering = null;
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
	return !(
		entity.getAbsX() + entity.width/2  < this.getAbsX() - this.width/2 || 
		entity.getAbsX() - entity.width/2  > this.getAbsX() + this.width/2 ||
		entity.getAbsY() + entity.height/2 < this.getAbsY() - this.height/2 || 
		entity.getAbsY() - entity.height/2 > this.getAbsY() + this.height/2 || 
		entity.getAbsZ() + entity.depth/2  < this.getAbsZ() - this.depth/2 || 
		entity.getAbsZ() - entity.depth/2  > this.getAbsZ() + this.depth/2
	);
};
oso.A_Entity.prototype.addEntity = function(entity) {
	entity.parent = this;
	this.List_children.push(entity);
};
oso.A_Entity.prototype.moveIn = function(entity, x, y, z) {
	this.position.x += x;
	this.position.y += y;
	this.position.z += z;
	
	this.isOnGround = true;
	entity.interactWith(this, x, y, z);
	this.hasChanged = true;
};
oso.A_Entity.prototype.interactWith = function(entity, x, y, z) {
	var childrenLenth = this.List_children.length;
	for(var i = 0; i < childrenLenth; i++) {
		this.List_children[i].interactWith(entity, x, y, z);
	}
};
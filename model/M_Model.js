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
	this.xCoord = xCoord;
	this.yCoord = yCoord;
	this.zCoord = zCoord;
	this.isSolid = false;
	this.hasChanged = true;
	this.velocity = 0;
	this.entityType = entityType;
	this.isOnGround = true;
	this.parent = null;
	this.rendering = null;
	this.List_children = [];
}
oso.A_Entity.prototype.contains = function(entity) {
	return !(
		entity.xCoord + entity.width < this.xCoord || 
		entity.xCoord > this.xCoord + this.width ||
		entity.yCoord + entity.height < this.yCoord || 
		entity.yCoord > this.yCoord + this.height || 
		entity.zCoord + entity.depth < this.zCoord || 
		entity.zCoord > this.zCoord + this.depth
		);
};
oso.A_Entity.prototype.addEntity = function(entity) {
	entity.parent = this;
	this.List_children.push(entity);
	entity.xCoord += entity.parent.xCoord;
	entity.yCoord += entity.parent.yCoord;
	entity.zCoord += entity.parent.zCoord;
};

oso.A_Entity.prototype.isOnGround = function(entity) {
	if (oso.A_Entity.prototype.contains.call(this, entity)) {
		if(entity.isSolid) {
			this.yCoord = entity.yCoord + entity.height;
			this.velocity = 1;
			return true;
		}
	}
	return false;
};
oso.A_Entity.prototype.moveIn = function(entity, x, y, z) {
	this.xCoord += x;
	this.yCoord += y;
	this.zCoord += z;
	
	this.isOnGround = oso.A_Entity.prototype.isOnGround.call(this, entity);
	entity.interactWith(this, x, y, z);
	entity.hasChanged = true;
};
oso.A_Entity.prototype.interactWith = function(entity, x, y, z) {
	var childrenLenth = this.List_children.length;
	for(var i = 0; i < childrenLenth; i++) {
		this.List_children[i].interactWith(entity, x, y, z);
	}
};
oso.A_Entity.prototype.increaseVelocity = function() {
	if(this.velocity === 0)
		this.velocity = 1;
	if(this.velocity >= 9)
		return 9;
	return this.velocity *= 1.25;
};
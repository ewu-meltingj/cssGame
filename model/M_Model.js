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
oso.A_Entity = function (width, height, xCoord, yCoord, zCoord, entityType) {
	this.id = oso.uniqueID.getID();
	this.width = width;
	this.height = height;
	this.xCoord = xCoord;
	this.yCoord = yCoord;
	this.zCoord = zCoord;
	this.hasChanged = true;
	this.entityType = entityType;
	this.children = 0;
	this.List_children = [];
}
oso.A_Entity.prototype.contains = function(entity) {
	return !(
		entity.xCoord + entity.width < this.xCoord || 
		entity.xCoord > this.xCoord + this.width || 
		entity.yCoord + entity.height < this.yCoord || 
		entity.yCoord > this.yCoord + this.height
		);
};
oso.A_Entity.prototype.addEntity = function(entity) {
	this.List_children.push(entity);
	this.children++;
};
oso.A_Entity.prototype.interactWith = function(entity, x, y) {
	var childrenLenth = this.List_children.length;

	for(var i = 0; i < childrenLenth; i++) {
		this.List_children[i].interactWith(entity, x, y);
		console.log("Inside: " + this.entityType + ":" + this.id + 
			" which inludes: " + this.List_children[i].entityType + ":" + this.List_children[i].id);
	}
	console.log("\n");
};
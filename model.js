var uniqueID = (function () {
	var counter;
	return {
		getID: function() {
			if (!counter)
				counter = 0;
			return counter++;
		}
	};
})();

function A_Entity(width, height, xCoord, yCoord, zCoord) {
	this.id = uniqueID.getID();
	this.width = width;
	this.height = height;
	this.xCoord = xCoord;
	this.yCoord = yCoord;
	this.zCoord = zCoord;
	this.hasChanged = true;
	this.children = 0;
	this.List_children = [];
}
A_Entity.prototype.contains = function(entity) {
	return !(
		entity.xCoord + entity.width < this.xCoord || 
		entity.xCoord > this.xCoord + this.width || 
		entity.yCoord + entity.height < this.yCoord || 
		entity.yCoord > this.yCoord + this.height
		);
};
A_Entity.prototype.addEntity = function(entity) {
	this.List_children.push(entity);
	this.children++;
};
A_Entity.prototype.interactWith = function(entity, x, y) {
	var childrenLenth = this.List_children.length;
	for(var i = 0; i < childrenLenth; i++)
		this.List_children[i].interactWith(entity, x, y);
};

// World Model
function World(name, width, height) {
	this.name = name;
	A_Entity.call(this, width, height, 0, 0, 0);
}
World.prototype.addEntity = function(entity) {
	A_Entity.prototype.addEntity.call(this, entity);
};
World.prototype.contains = function(entity) {
	return A_Entity.prototype.contains.call(this, entity);
};
World.prototype.interactWith = function(entity, x, y) {
	A_Entity.prototype.interactWith.call(this, entity, x, y);
};
World.prototype.render = function(view) {
	view.renderWorld(this);
};
World.prototype.update = function(observer) {
	observer.updateWorld(this);
};

// Person Model
function Person(name, width, height, xCoord, yCoord, zCoord) {
	this.name = name;
	A_Entity.call(this, width, height, xCoord, yCoord, zCoord);
}
Person.prototype.addEntity = function(entity) {
	A_Entity.prototype.addEntity.call(this, entity);
};
Person.prototype.contains = function(entity) {
	return A_Entity.prototype.contains.call(this, entity);
};
Person.prototype.interactWith = function(entity, x, y) {
};
Person.prototype.moveIn = function(entity, x, y) {
	this.xCoord += x;
	this.yCoord += y;
	entity.interactWith(this, x, y);
	entity.hasChanged = true;
};
Person.prototype.render = function(view) {
	view.renderPerson(this);
};
Person.prototype.update = function(observer) {
	observer.updatePerson(this);
};

// Wall Model
function Wall(width, height, xCoord, yCoord, zCoord) {
	A_Entity.call(this, width, height, xCoord, yCoord, zCoord);
}
Wall.prototype.addEntity = function(entity) {
	A_Entity.prototype.addEntity.call(this, entity);
};
Wall.prototype.contains = function(entity) {
	return A_Entity.prototype.contains.call(this, entity);
};
Wall.prototype.interactWith = function(entity, x, y) {
	if(this.contains(entity)) {
		entity.xCoord += x*-1;
		entity.yCoord += y*-1;
		A_Entity.prototype.interactWith.call(this, entity, x, y);
	}
};
Wall.prototype.render = function(view) {
	view.renderStructure(this);
};
Wall.prototype.update = function(observer) {
	observer.updateStructure(this);
};

// Room Model
function Room(width, height, xCoord, yCoord, zCoord) {
	A_Entity.call(this, width, height, xCoord, yCoord, zCoord);
	
	this.addEntity(new Wall(width, 5, xCoord, yCoord, zCoord));
	this.addEntity(new Wall(width/2 - 20, 5, xCoord, yCoord + this.height - 5, zCoord));
	this.addEntity(new Wall(width/2 - 20, 5, xCoord + width/2 + 20, yCoord + this.height - 5, zCoord));
	this.addEntity(new Wall(5, height, xCoord, yCoord, zCoord));
	this.addEntity(new Wall(5, height, xCoord + this.width, yCoord, zCoord));
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

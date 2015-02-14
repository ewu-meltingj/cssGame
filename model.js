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

A_Entity.prototype.addEntity = function(entity) {
	this.List_children.push(entity);
	this.children++;
};

function A_Structure(width, height, xCoord, yCoord, zCoord) {
	A_Entity.call(this, width, height, xCoord, yCoord, zCoord);
}

// World Model
function World(name, width, height) {
	this.name = name;
	A_Entity.call(this, width, height, 0, 0, 0);
}
World.prototype.addEntity = function(entity) {
	A_Entity.prototype.addEntity.call(this, entity);
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
Person.prototype.move = function(x, y) {

};
Person.prototype.render = function(view) {
	view.renderPerson(this);
};
Person.prototype.update = function(observer) {
	observer.updatePerson(this);
};

// Wall Model
function Wall(width, height, xCoord, yCoord, zCoord) {
	A_Structure.call(this, width, height, xCoord, yCoord, zCoord);
}
Wall.prototype.addEntity = function(entity) {
	A_Entity.prototype.addEntity.call(this, entity);
};
Wall.prototype.render = function(view) {
	view.renderStructure(this);
};
Wall.prototype.update = function(observer) {
	observer.updateStructure(this);
};

// Room Model
function Room(width, height, xCoord, yCoord, zCoord) {
	A_Structure.call(this, width, height, xCoord, yCoord, zCoord);
}
Room.prototype.addEntity = function(entity) {
	A_Entity.prototype.addEntity.call(this, entity);
};
Room.prototype.render = function(view) {
	view.renderStructure(this);
};
Room.prototype.update = function(observer) {
	observer.updateStructure(this);
};

function View () {
	this.offsetX = 0;
	this.offsetY = 0;

	this.render = function(entity) {
		entity.render(this);

		var childrenLenth = entity.List_children.length;
		for(var i = 0; i < childrenLenth; i++)
			this.render(entity.List_children[i]);
	}

	this.clear = function() {
		ctxBack.clearRect(0, 0, window.innerWidth, window.innerHeight);
	}

	this.focusOn = function(entity) {
		this.offsetX = entity.xCoord - (window.innerWidth)/2;
		this.offsetY = entity.yCoord - (window.innerHeight)/2;
	}

	this.renderWorld = function(world) {
		ctxBack.fillStyle = "rgb(200,0,0)";
		ctxBack.fillRect (
			world.xCoord - this.offsetX, 
			world.yCoord - this.offsetY, 
			world.width, 
			world.height);

	}

	this.renderPerson = function(person) {
		ctxBack.fillStyle = "rgb(200,250,0)";
		ctxBack.fillRect (
			person.xCoord - this.offsetX, 
			person.yCoord - this.offsetY, 
			person.width, 
			person.height);
	}

	this.renderStructure = function(structure) {
		ctxBack.fillStyle = "rgb(100,200,30)";
		ctxBack.fillRect (
			structure.xCoord - this.offsetX,
			structure.yCoord - this.offsetY, 
			structure.width, 
			structure.height);
	}

	this.renderRoom = function(structure) {
		ctxBack.fillStyle = "rgb(20,20,30)";
		ctxBack.fillRect (
			structure.xCoord - this.offsetX,
			structure.yCoord - this.offsetY, 
			structure.width, 
			structure.height);
	}
}

function Observer(view) {
	this.obEntitites = [];

	this.addEntity = function (entity) {
		this.obEntitites.push(entity);
		var childrenLenth = entity.List_children.length;
		for(var i = 0; i < childrenLenth; i++)
			this.addEntity(entity.List_children[i]);
	};

	this.update = function () {
		var length = this.obEntitites.length;
		var render = false;
		for(var i = 0; i < length; i++) {
			if (this.obEntitites[i].hasChanged === true) {
				this.obEntitites[i].update(this);
				render = true;
			}
		}
		if (render) {
			view.clear();
			view.focusOn(mainCharacter);
			view.render(world);
		}
	};

	this.updateWorld = function(world) {
		world.hasChanged = false;
		var childrenLenth = world.List_children.length;
		for(var i = 0; i < childrenLenth; i++)
			world.List_children[i].update(this);
	};

	this.updatePerson = function(person) {
		person.hasChanged = false;
		var childrenLenth = person.List_children.length;
		for(var i = 0; i < childrenLenth; i++)
			person.List_children[i].update(this);
	};

	this.updateStructure = function(structure) {
		structure.hasChanged = false;
		var childrenLenth = structure.List_children.length;
		for(var i = 0; i < childrenLenth; i++)
			structure.List_children[i].update(this);
	};
}
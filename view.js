function View () {
	this.render = function(entity) {
		entity.render(this);
		console.log(entity);
		var childrenLenth = entity.List_children.length;
		for(var i = 0; i < childrenLenth; i++)
			this.render(entity.List_children[i]);
	}

	this.renderWorld = function(world) {
		context.fillStyle = "rgb(200,0,0)";
		context.fillRect (
			world.xCoord, 
			world.yCoord, 
			world.width, 
			world.height);

	}

	this.renderPerson = function(person) {
		context.fillStyle = "rgb(200,250,0)";
		context.fillRect (
			person.xCoord, 
			person.yCoord, 
			person.width, 
			person.height);
	}

	this.renderStructure = function(structure) {
		context.fillStyle = "rgb(100,200,30)";
		context.fillRect (
			structure.xCoord,
			structure.yCoord, 
			structure.width, 
			structure.height);
	}
}

function Observer() {
	this.obEntitites = [];
	this.view = new View();

	this.addEntity = function (entity) {
		this.obEntitites.push(entity);
		var childrenLenth = entity.List_children.length;
		for(var i = 0; i < childrenLenth; i++)
			this.addEntity(entity.List_children[i]);
	};

	this.update = function () {
		var length = this.obEntitites.length;
		for(var i = 0; i < length; i++) {
			if (this.obEntitites[i].hasChanged === true) {
				this.obEntitites[i].update(this);
				this.view.render(this.obEntitites[i]);
			}
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
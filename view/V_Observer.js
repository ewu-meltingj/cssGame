if(oso === undefined) {var oso = {};}

oso.Observer = function (_view, _mainCharacter, _world) {
	var obEntitites = [],
	view = _view,
	mainCharacter = _mainCharacter,
	world = _world;
	addEntity(world);

	this.finishUpdate = function (entity) {
		entity.hasChanged = false;
		var childrenLenth = entity.List_children.length;
		for(var i = 0; i < childrenLenth; i++)
			entity.List_children[i].update(this);
		view.render(entity);

		if(!entity.isOnGround)
			entity.moveIn(world, 0, -(entity.increaseVelocity()), 0);
	}

	this.update = function () {
		var length = obEntitites.length;
		for(var i = 0; i < length; i++) {
			if (obEntitites[i].hasChanged === true)
				obEntitites[i].update(this);
		}
	};

	this.updateWorld = function(world) {
		this.finishUpdate(world);
	};

	this.updatePerson = function(person) {
		this.finishUpdate(person);
	};

	this.updateStructure = function(structure) {
		this.finishUpdate(structure);
	};

	this.updateDoor = function(door) {
		this.finishUpdate(door);
	};

	function addEntity (entity) {
		obEntitites.push(entity);
		var childrenLenth = entity.List_children.length;
		for(var i = 0; i < childrenLenth; i++)
			addEntity(entity.List_children[i]);
	};//private 
}
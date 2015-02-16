if(oso === undefined) {var oso = {};}

oso.Observer = function (view, _mainCharacter, world) {
	var obEntitites = [],
	view = view,
	mainCharacter = _mainCharacter,
	world = world;
	addEntity(world);

	function addEntity (entity) {
		obEntitites.push(entity);
		var childrenLenth = entity.List_children.length;
		for(var i = 0; i < childrenLenth; i++)
			addEntity(entity.List_children[i]);
	};//private 

	this.update = function () {
		var length = obEntitites.length;

		var render = false;
		for(var i = 0; i < length; i++) {
			if (obEntitites[i].hasChanged === true) {
				obEntitites[i].update(this);
				render = true;
			}
		}
		if (render) {
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

	this.updateDoor = function(door) {
		door.hasChanged = false;
		var childrenLenth = door.List_children.length;
		for(var i = 0; i < childrenLenth; i++)
			door.List_children[i].update(this);
	};
}
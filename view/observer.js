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

	this.updateDoor = function(door) {
		door.hasChanged = false;
		var childrenLenth = door.List_children.length;
		for(var i = 0; i < childrenLenth; i++)
			door.List_children[i].update(this);
	};
}
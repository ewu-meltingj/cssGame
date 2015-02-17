if(oso === undefined) {var oso = {};}

oso.Observer = function (_view, world) {
	var obEntitites = [],
	view = _view;
	
	addEntity(world);
	this.world = world;
	this.view = view;

	this.updateChildren = function (entity, delta) {
		var childrenLenth = entity.List_children.length;
		for(var i = 0; i < childrenLenth; i++)
			entity.List_children[i].update(this, delta);
		view.render(entity);
	}

	this.update = function (delta) {
		var length = obEntitites.length;

		for(var i = 0; i < length; i++) {
			if (obEntitites[i].hasChanged === true) {
				obEntitites[i].update(this, delta);
			}
		}
	};
	
	function addEntity (entity) {
		obEntitites.push(entity);
		var childrenLenth = entity.List_children.length;
		for(var i = 0; i < childrenLenth; i++)
			addEntity(entity.List_children[i]);
	};//private 
}
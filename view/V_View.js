if(oso === undefined) {var oso = {};}

oso.View = function (ctx) {
	this.offsetX = 0;
	this.offsetY = 0;
	this.ctx = ctx;

	this.render = function(entity) {
		entity.render(this);

		var childrenLenth = entity.List_children.length;
		for(var i = 0; i < childrenLenth; i++)
			this.render(entity.List_children[i]);
	}

	this.clear = function() {
		this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
	}

	this.focusOn = function(entity) {
		this.offsetX = entity.xCoord - (window.innerWidth)/2;
		this.offsetY = entity.yCoord - (window.innerHeight)/2;
	}

}
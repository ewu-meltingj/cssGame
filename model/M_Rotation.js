if(oso === undefined) {var oso = {};}

oso.Rotation = function(degree) {
	this.degree = degree;

	this.translate = function(degree) {
		this.degree += degree;
		if(this.degree < 0)
			this.degree = 360 + this.degree;
		this.degree %= 360;
		if(this.degree == 0)
			this.degree = 360;
	}

	this.radian = function () {
		return this.degree * Math.PI / 180;
	}

	this.rotate = function(steps, position) {
		var point = new oso.Point(
			steps * Math.sin(this.radian()) + position.x,
			position.y,
			steps * Math.cos(this.radian()) + position.z
		);
		return point;
	};

	if(this.degree === 0)
		this.translate(this.degree);
}
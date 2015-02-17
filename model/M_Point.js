if(oso === undefined) {var oso = {};}

oso.Point = function(x, y, z) {
	this.x = x;
	this.y = y;
	this.z = z;

	this.equals = function(point) {
		return (
			value(this.x, point.x) < 0.25 &&
			value(this.y, point.y) < 0.25 &&
			value(this.z, point.z) < 0.25
		);

		function value(x, y) {
			return Math.abs(x - y);
		}
	}
}
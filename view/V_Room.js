if(oso === undefined) {var oso = {};}

oso.View.prototype.renderRoom = function(structure) {
	this.ctx.fillStyle = "rgb(20,20,30)";
	this.ctx.fillRect (
		structure.xCoord - this.offsetX,
		structure.yCoord - this.offsetY, 
		structure.width, 
		structure.height);
}
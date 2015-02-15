if(oso === undefined) {var oso = {};}

oso.View.prototype.renderDoor = function(structure) {
	this.ctx.fillStyle = "rgb(230,255,255)";
	this.ctx.fillRect (
		structure.xCoord - this.offsetX,
		structure.yCoord - this.offsetY, 
		structure.width, 
		structure.height);
}
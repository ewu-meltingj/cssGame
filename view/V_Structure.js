if(oso === undefined) {var oso = {};}

oso.View.prototype.renderStructure = function(structure) {
	this.ctx.fillStyle = "rgb(100,200,30)";
	this.ctx.fillRect (
		structure.xCoord - this.offsetX,
		structure.yCoord - this.offsetY, 
		structure.width, 
		structure.height);
}
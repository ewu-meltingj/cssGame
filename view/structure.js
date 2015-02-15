View.prototype.renderStructure = function(structure) {
	ctxBack.fillStyle = "rgb(100,200,30)";
	ctxBack.fillRect (
		structure.xCoord - this.offsetX,
		structure.yCoord - this.offsetY, 
		structure.width, 
		structure.height);
}
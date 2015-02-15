View.prototype.renderRoom = function(structure) {
	ctxBack.fillStyle = "rgb(20,20,30)";
	ctxBack.fillRect (
		structure.xCoord - this.offsetX,
		structure.yCoord - this.offsetY, 
		structure.width, 
		structure.height);
}
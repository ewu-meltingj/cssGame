View.prototype.renderDoor = function(structure) {
	ctxBack.fillStyle = "rgb(230,255,255)";
	ctxBack.fillRect (
		structure.xCoord - this.offsetX,
		structure.yCoord - this.offsetY, 
		structure.width, 
		structure.height);
}
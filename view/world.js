View.prototype.renderWorld = function(world) {
	ctxBack.fillStyle = "rgb(200,0,0)";
	ctxBack.fillRect (
		world.xCoord - this.offsetX, 
		world.yCoord - this.offsetY, 
		world.width, 
		world.height);
}
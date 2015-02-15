if(oso === undefined) {var oso = {};}

oso.View.prototype.renderWorld = function(world) {
	this.ctx.fillStyle = "rgb(200,0,0)";
	this.ctx.fillRect (
		world.xCoord - this.offsetX, 
		world.yCoord - this.offsetY, 
		world.width, 
		world.height);
}
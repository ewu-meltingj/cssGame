if(oso === undefined) {var oso = {};}

oso.View.prototype.renderPerson = function(person) {
	this.ctx.fillStyle = "rgb(200,250,0)";
	this.ctx.fillRect (
		person.xCoord - this.offsetX, 
		person.yCoord - this.offsetY, 
		person.width, 
		person.height);
}
View.prototype.renderPerson = function(person) {
	ctxBack.fillStyle = "rgb(200,250,0)";
	ctxBack.fillRect (
		person.xCoord - this.offsetX, 
		person.yCoord - this.offsetY, 
		person.width, 
		person.height);
}
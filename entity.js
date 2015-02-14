function Entity(id, width, height, xCoord, yCoord) {
	this.id = id;
	this.width = width;
	this.height = height;
	this.xCoord = xCoord;
	this.yCoord = yCoord;
	console.log("" +
		"Width: " + width +
		"\n Height: " + height +
		"\n x: " + xCoord +
		"\n y: " + yCoord);
}

function Person(name, id, width, height, xCoord, yCoord) {
	this.name = name;
	console.log("Person Created\n Name: " + name + "\n ID: " + id);
	Entity.call(this, id, width, height, xCoord, yCoord);
}
function Entity(id, width, height, xCoord, yCoord) {
	this.id = id;
	this.width = width;
	this.height = height;
	this.xCoord = xCoord;
	this.yCoord = yCoord;
	console.log("Entity Created\n ID: " + id + "\n Width: " + width + "\n Height: " +height);
}

function Person(name, id, width, height) {
	this.name = name;
	console.log("Person Created\n Name: " + name + "\n ID: " + id);
	Entity.call(this, id, width, height);
}

var person = new Person("Jeremy", 1, 100, 200);
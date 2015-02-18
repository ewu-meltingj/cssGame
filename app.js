if(oso === undefined) {var oso = {};}

(function (){
	var worldHeight = 5;
	var worldWidth = 1170;
	var worldDepth = 200;
	var texture = "assets/images/ground.jpg";

	var world = new oso.World("Paradise", worldWidth, worldHeight, worldDepth, texture); // name, width, height, depth
	var mainCharacter = new oso.Person("Jeremy", 50, 90, 50, 0, groundOffset(0, 90), 0); //name, width, height, depth, xCoord, yCoord, zCoord
	world.addEntity(new oso.Room(
		300, //width
		150, //height
		100, //depth
		0,   //x
		groundOffset(0, 150), //y 
		backOffset(0, 100)));    //z

	world.addEntity(mainCharacter);


	var view = new oso.View();
	var observer = new oso.Observer(view, world);
	var controller = new oso.Controller(mainCharacter);

	observer.addEntity(world);
	view.render(world);


	var gameLoop = new oso.GameLoop(observer, view);
	gameLoop.start();

	function groundOffset(y, eHeight) {
		return worldHeight/2 + eHeight/2 + y;
	}

	function backOffset(z, eDepth) {
		return -worldDepth/2 + eDepth/2 + z;
	}
})();
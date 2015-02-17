if(oso === undefined) {var oso = {};}

(function (){
	var worldHeight = 5;
	var worldWidth = 500;
	var worldDepth = 100;

	var world = new oso.World("Paradise", worldWidth, worldHeight, worldDepth); // name, width, height, depth
	var mainCharacter = new oso.Person("Jeremy", 10, 30, 10, 0, groundOffset(0, 30), 0); //name, width, height, depth, xCoord, yCoord, zCoord
	world.addEntity(new oso.Room(400, 90, 40, 0, groundOffset(0, 90), 0));
	world.addEntity(mainCharacter);


	var view = new oso.View();
	var observer = new oso.Observer(view, world);
	var controller = new oso.Controller(view, mainCharacter, world);
	view.render(world);


	var gameLoop = new oso.GameLoop(observer, view);
	gameLoop.start();

	function groundOffset(y, eHeight) {
		return worldHeight/2 + eHeight/2 + y;
	}
})();
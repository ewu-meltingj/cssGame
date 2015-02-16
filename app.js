if(oso === undefined) {var oso = {};}

(function (){
	var worldLevel = 5;
	var worldWidth = 500;
	var worldDepth = 100;

	var world = new oso.World("Paradise", worldWidth, worldLevel, worldDepth); // name, width, height, depth
	var mainCharacter = new oso.Person("Jeremy", 10, 30, 10, 20, worldLevel, 50); //name, width, height, depth, xCoord, yCoord, zCoord

	world.addEntity(new oso.Room(100, 80, worldDepth - 20, 100, worldLevel, 10));
	world.addEntity(mainCharacter);


	var view = new oso.View();
	var observer = new oso.Observer(view, mainCharacter, world);
	var controller = new oso.Controller(view, mainCharacter, world);

	view.render(world);
	
	setInterval(onTimerTick, 33);

	function onTimerTick() {
	    observer.update();
	}
})();
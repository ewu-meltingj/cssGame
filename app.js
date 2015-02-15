if(oso === undefined) {var oso = {};}

(function (){
	var canvas = document.getElementById('background'),
	ctx = canvas.getContext('2d');
	window.addEventListener('resize', resizeCanvas, false);

	function resizeCanvas() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		render(); 
	}

	function render() {
		view.render(world);
	}

	var world = new oso.World("Paradise", 500, 500);
	var mainCharacter = new oso.Person("Jeremy", 20, 20, 30, 30, 1);

	world.addEntity(new oso.Room(100, 200, 10, 10, 1));
	world.addEntity(new oso.Room(200, 200, 120, 10, 1));
	world.addEntity(new oso.Room(100, 200, 380, 10, 1));
	world.addEntity(mainCharacter);


	var view = new oso.View(ctx);
	var observer = new oso.Observer(view, mainCharacter, world);

	var controller = new oso.Controller(mainCharacter, world);

	resizeCanvas();
	setInterval(onTimerTick, 33);

	function onTimerTick() {
	    observer.update();
	}
})();
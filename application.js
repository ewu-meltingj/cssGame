

var canvasBack = document.getElementById('background'),
ctxBack = canvasBack.getContext('2d');
window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
	canvasBack.width = window.innerWidth;
	canvasBack.height = window.innerHeight;
	render(); 
}

function render() {
	view.render(world);
}

var view = new View();
var observer = new Observer(view);
var world = new World("Paradise", 500, 500);
var mainCharacter = new Person("Jeremy", 20, 20, 30, 30, 1);
world.addEntity(new Room(100, 200, 10, 10, 1));

world.addEntity(new Room(200, 200, 120, 10, 1));

world.addEntity(mainCharacter);

observer.addEntity(world);


var controller = new Control(mainCharacter, world);

resizeCanvas();
setInterval(onTimerTick, 33); // 33 milliseconds = ~ 30 frames per sec

function onTimerTick() {
    observer.update();
}
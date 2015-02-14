// All references will be linked
// this is to resize canvas and retain canvas element proportions
// http://stackoverflow.com/questions/4288253/html5-canvas-100-width-height-of-viewport

var canvasBack = document.getElementById('background'),
ctxBack = canvasBack.getContext('2d'),
canvasStructs = document.getElementById('structures'),
ctxStructs = canvasStructs.getContext('2d'),
canvasChars = document.getElementById('characters'),
ctxChars = canvasChars.getContext('2d');

window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
	canvasBack.width = window.innerWidth;
	canvasBack.height = window.innerHeight;
	canvasStructs.width = window.innerWidth;
	canvasStructs.height = window.innerHeight;
	canvasChars.width = window.innerWidth;
	canvasChars.height = window.innerHeight;
	render(); 
}

function render() {
	view.render(world);
}

var view = new View();
var observer = new Observer(view);
var world = new World("Paradise", 1000, 1000);
var mainCharacter = new Person("Jeremy", 10, 20, 10, 20, 1);
world.addEntity(mainCharacter);
world.addEntity(new Wall(100, 200, 30, 80, 1));
observer.addEntity(world);
var controller = new Control(mainCharacter);

resizeCanvas();

setInterval(onTimerTick, 33); // 33 milliseconds = ~ 30 frames per sec

function onTimerTick() {
    observer.update();
}
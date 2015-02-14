// All references will be linked
// this is to resize canvas and retain canvas element proportions
// http://stackoverflow.com/questions/4288253/html5-canvas-100-width-height-of-viewport

var canvas = document.getElementById('triviaMaze'),
context = canvas.getContext('2d');
window.addEventListener('resize', resizeCanvas, false);

// var view = new View();
var observer = new Observer();

function resizeCanvas() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	render(); 
}

function render() {
	observer.update();
}

var world = new World("Paradise", 1000, 1000);
world.addEntity(new Person("Jeremy", 10, 20, 10, 20, 1));
world.addEntity(new Wall(100, 200, 30, 80, 1));

observer.addEntity(world);

console.log(observer.obEntitites);


resizeCanvas();
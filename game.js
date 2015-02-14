// All references will be linked
// this is to resize canvas and retain canvas element proportions
// http://stackoverflow.com/questions/4288253/html5-canvas-100-width-height-of-viewport
(function() {
	var canvas = document.getElementById('triviaMaze'),
	context = canvas.getContext('2d');

	window.addEventListener('resize', resizeCanvas, false);

	function resizeCanvas() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		drawStuff(); 
	}

	resizeCanvas();

	function drawStuff() {
		context.fillStyle = "rgb(200,0,0)";
		context.fillRect (10, 10, 55, 50);

		context.fillStyle = "rgba(0, 0, 200, 0.5)";
		context.fillRect (30, 30, 55, 50);
    }
})();
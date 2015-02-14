
(function() {
	var canvas = document.getElementById('triviaMaze'),
	context = canvas.getContext('2d');

	// resize the canvas to fill browser window dynamically
	window.addEventListener('resize', resizeCanvas, false);

	function resizeCanvas() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		/**
		* Your drawings need to be inside this function otherwise they will be reset when 
		* you resize the browser window and the canvas goes will be cleared.
		*/
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
if(oso === undefined) {var oso = {};}

oso.GameLoop = function (observer, view) {
	var lastCall = Date.now();
	var accumulator = 0;
	var timestep = 1 / 60;

	function gameLogic() {
		requestAnimationFrame(gameLogic);
		var delta = Date.now() - lastCall;
		lastCall = Date.now();
		accumulator += delta;

		while (accumulator >= timestep) {
	    	observer.update(delta);
			accumulator -= timestep;
		}

		view.renderScene();
	}

	this.start = function() {
		gameLogic();
	}
}
if(oso === undefined) {var oso = {};}

oso.View = function () {
	var scene,
		camera,
		renderer,
		width = window.innerWidth,
		height = window.innerHeight;

	cameraOrthographic();
	init();
	addLighting();

	this.render = function(entity) {
		entity.render(this, scene, camera);
		var childrenLenth = entity.List_children.length;
		for(var i = 0; i < childrenLenth; i++)
			this.render(entity.List_children[i]);
	}

	this.rotateCameraY = function(isLeft) {
		if(isLeft) {
			camera.rotation.y += degInRad(3);
		}
		else {
			camera.rotation.y -= degInRad(3);
		}
	}

	this.rotateCameraX = function(isUp) {
		if(isUp) {
			camera.rotation.x += degInRad(3);
		}
		else {
			camera.rotation.x -= degInRad(3);
		}
	}

	this.renderScene = function () {
		renderer.render( scene, camera );
	};

	function addLighting() {
		var directionalLight = new THREE.DirectionalLight(0xffffff,1);
			directionalLight.position.set(2, 2, 4).normalize();
			scene.add(directionalLight);
	};

	function init() {
		scene = new THREE.Scene();
		renderer = new THREE.CanvasRenderer();

		renderer.setClearColor( 0xf0f0f0 );
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize(width, height);
		document.body.appendChild(renderer.domElement);

		window.addEventListener('resize', onWindowResize, false );
	};

	function cameraOrthographic() {
		var left = width / -2, 
			right = width / 2, 
			top = height / 2, 
			bottom = height / -2, 
			near = -500, 
			far = 1000;

		camera = new THREE.OrthographicCamera(left, right, top, bottom, near, far);
		camera.position.x = 10;
		camera.position.y = 20;
		camera.position.z = 50;
		camera.updateProjectionMatrix();
	};

	function cameraPerspective() {
		var fov = 45,
			aspectRatio = width/height,
			near = 1,
			far = 1000;

		camera = new THREE.PerspectiveCamera( fov, aspectRatio, near, far);
		camera.position.x = 0;
		camera.position.y = 200;
		camera.position.z = 300;
		camera.rotation.x = -0.6;
		camera.updateProjectionMatrix();
	};

	function degInRad(deg) {
		return deg * Math.PI / 180;
	}

	function onWindowResize() {
		camera.left = window.innerWidth / - 2;
		camera.right = window.innerWidth / 2;
		camera.top = window.innerHeight / 2;
		camera.bottom = window.innerHeight / - 2;
		camera.aspect = window.innerWidth/window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( window.innerWidth, window.innerHeight );
	};
}
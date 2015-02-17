if(oso === undefined) {var oso = {};}

oso.View = function () {
	var scene,
		camera,
		renderer,
		width = window.innerWidth,
		height = window.innerHeight;

	camera();
	init();
	addLighting();
	animate();

	this.render = function(entity) {
		entity.render(this, scene, camera);
		var childrenLenth = entity.List_children.length;
		for(var i = 0; i < childrenLenth; i++)
			this.render(entity.List_children[i]);
	}

	this.offset = function() {
		return {
			x : function(entity) {
				return entity.parent.width/2 * -1 + entity.width/2;
			},
			y : function(entity) {
				return entity.parent.height/2 * -1 + entity.height/2;
			},
			z : function(entity) {
				return entity.parent.depth/2 * -1 + entity.depth/2;
			}
		};
	};

	this.rotateCamera = function(isLeft) {
		if(isLeft) {
			camera.rotation.y += -0.008;
			camera.rotation.x += 0.0008;
			camera.position.x += -4;
			camera.position.z += -3;

		}
		else {
			camera.rotation.y += 0.008;
			camera.rotation.x += -0.0008;
			camera.position.x += 4;
			camera.position.z += 3;

		}
	}

	function animate() {
		requestAnimationFrame(animate);
		renderScene();
	};

	function renderScene() {
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

	function camera(isOrtho) {
		if(isOrtho)
			cameraOrthographic();
		else
			cameraPerspective();
	};

	function cameraOrthographic() {
		var left =  width / - 2,
			right = width / 2,
			top = height / 2,
			bottom = height / - 2,
			near = -500,
			far = 1000;

		camera = new THREE.OrthographicCamera(left, right, top, bottom, near, far);
		camera.position.x = 200;
		camera.position.y = 100;
		camera.position.z = 300;
		camera.updateProjectionMatrix();
	};

	function cameraPerspective() {
		var fov = 45,
			aspectRatio = width/height,
			near = 1,
			far = 10000;

		camera = new THREE.PerspectiveCamera( fov, aspectRatio, near, far);
		camera.position.x = 0;
		camera.position.y = 200;
		camera.position.z = 450;
		camera.rotation.x = -0.2;
		camera.updateProjectionMatrix();
	};

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
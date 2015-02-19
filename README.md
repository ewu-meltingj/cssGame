# VampireElvis.js

VampireElvis is a open source JavaScript game engine for traditional side scrollers. It includes pre-defined room and character entities.

VampireElvis uses a simple collision system based on parent child relationships. When an entity interacts it then checks each child for collisions. The engine responds best when minimal entities exist in the main parent.

Standard 'a, s, d, w' keys are defined in the controller.

## Current Tasks
* Handle collisions with solid structures.
* Implement varying velocity based on gravity.

## Framework Goals
* Keep VampireElvis minimal.
* Maintain code readability and organization.
* Include mobile capabilites.

## demo.js
```javscript

var worldHeight = 5;
var worldWidth = 1170;
var worldDepth = 200;
var texture = "assets/images/ground.jpg";

// create world
var world = new oso.World("Paradise", worldWidth, worldHeight, worldDepth, texture);

//create main character
var mainCharacter = new oso.Person("Jeremy", 72, 100, 72, 0, groundOffset(0, 90), 0);

// create room and add it to the world
world.addEntity(new oso.Room(
	300, //width
	150, //height
	100, //depth
	0,   //x
	groundOffset(0, 150), //y 
	backOffset(0, 100)));    //z

// add character to the world
world.addEntity(mainCharacter);

// create view
var view = new oso.View();

// create observer after all entities are defined.
var observer = new oso.Observer(view, world);

// create controller
var controller = new oso.Controller(mainCharacter);

// add world to the observer
observer.addEntity(world);
view.render(world);

// start game
var gameLoop = new oso.GameLoop(observer, view);
gameLoop.start();

// helper functions
function groundOffset(y, eHeight) {
	return worldHeight/2 + eHeight/2 + y;
}

function backOffset(z, eDepth) {
	return -worldDepth/2 + eDepth/2 + z;
}
```

Simple Demo renders with openGL
[sourcre.am/vampire-elvis](http://sourcre.am/vampire-elvis "Vampire Elvis").

Using three.js to handle 3D rendering.
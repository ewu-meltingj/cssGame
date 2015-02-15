function loadScript(urlArray, nextCallback) {
    var callback = nextCallback
    var body = document.getElementsByTagName('body')[0];
    var script = document.createElement('script');

    script.type = 'text/javascript';
    script.src = urlArray.pop();

    if(urlArray.length > 0)
        callback = loadScript(urlArray, nextCallback);

    script.onreadystatechange = callback;
    script.onload = callback;

    body.appendChild(script);
}

var urls = [
    "model/model.js",
    "model/world.js",
    "model/wall.js",
    "model/room.js",
    "model/person.js",
    "model/door.js",
    "view/view.js",
    "view/world.js",
    "view/structure.js",
    "view/room.js",
    "view/person.js",
    "view/door.js",
    "view/observer.js",
    "controller/controller.js",
    "application.js"];

loadScript(urls, function(){
    console.log("Finished Loading Scripts");
});
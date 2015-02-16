function loadScript(urlArray, nextCallback) {
    var callback = nextCallback
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');

    script.type = 'text/javascript';
    script.src = urlArray.pop();

    if(urlArray.length > 0)
        callback = loadScript(urlArray, nextCallback);

    script.onreadystatechange = callback;
    script.onload = callback;

    head.appendChild(script);
}

var urls = [
    "model/M_Model.js",
    "model/M_World.js",
    "model/M_Wall.js",
    "model/M_Room.js",
    "model/M_Person.js",
    "model/M_Door.js",
    "view/V_View.js",
    "view/V_World.js",
    "view/V_Wall.js",
    "view/V_Room.js",
    "view/V_Person.js",
    "view/V_Door.js",
    "view/V_Observer.js",
    "controller/C_Controller.js",
    "app.js"];

loadScript(urls, function(){
    console.log("Finished Loading Scripts");
});
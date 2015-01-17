var serverUrl = "http://192.168.2.18:3000/control";
var eventsToListen = "tap";


var forwardBtn = new Hammer(document.getElementById('forwardBtn'));
forwardBtn.on(eventsToListen, function(ev) {
    ev.preventDefault();
    goForward();
});
var leftBtn = new Hammer(document.getElementById('leftBtn'));
leftBtn.on(eventsToListen, function(ev) {
    ev.preventDefault();
    goLeft();
});
var rightBtn = new Hammer(document.getElementById('rightBtn'));
rightBtn.on(eventsToListen, function(ev) {
    ev.preventDefault();
    goRight();
});

function goForward(){
    console.log("Forward");
    $.ajax({
        url: serverUrl,
        data: {direction: "forward"}
    });
};

function goLeft(){
    console.log("Left");
    $.ajax({
        url: serverUrl,
        data: {direction: "left"}
    });
};

function goRight(){
    console.log("Right");
    $.ajax({
        url: serverUrl,
        data: {direction: "right"}
    });
};

var serverUrl = "http://localhost:3000/control";

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

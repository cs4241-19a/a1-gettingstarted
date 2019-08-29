var i = 0;
var j = 0;
var speed = 80;

var messages = [
    ["Hello.", `I'm Jyan.`],
    ["Hola.", "Yo soy Jean Claude."],
    ["Saluton.", "Mi nomiĝas Johano."],
    ["Xin chào.", "Tôi tên là Rohn."]
]

var phase = 0;

function writeName() {
    if (i < messages[phase][0].length) {
        document.getElementById("write-name-1").innerHTML += messages[phase][0].charAt(i);
        i++;
        setTimeout(writeName, speed);
    } else if (j < messages[phase][1].length) {
        document.getElementById("write-name-2").innerHTML += messages[phase][1].charAt(j);
        j++;
        setTimeout(writeName, speed);
    } else {
        i = 0;
        j = 0;
        if (phase === 3) {
            phase = 0
        } else {
            phase++;
        }
        setTimeout(function() {
            document.getElementById("write-name-1").innerHTML = ""
            document.getElementById("write-name-2").innerHTML = ""
            setTimeout(writeName, speed);
        }, 3000);
    }
}


window.onload = function() {
    writeName();
    document.getElementById("body").classList.add("background");
    setTimeout(function() {
        document.getElementById("keep-scrolling").style.opacity = "100";
    }, 2000)
    setTimeout(function() {
        document.getElementById("keep-scrolling").style.opacity = "0";
    }, 4500)
}

var i = 0;
var j = 0;
var txt1 = `Hello.`;
var txt2 = `I'm Jean Claude.`;
var speed = 80;

function typeWriter() {
    if (i < txt1.length) {
        document.getElementById("typewriter-1").innerHTML += txt1.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else if (j < txt2.length) {
        document.getElementById("typewriter-2").innerHTML += txt2.charAt(j);
        j++;
        setTimeout(typeWriter, speed);
    }
}


window.onload = function() {
    typeWriter();
    document.getElementById("body").classList.add("background");
    setTimeout(function() {
        document.getElementById("keep-scrolling").style.opacity = "100";
    }, 2000)
    setTimeout(function() {
        document.getElementById("keep-scrolling").style.opacity = "0";
    }, 4500)
}

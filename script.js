
var bounce = null;
function init() {
    bounce = document.getElementById('img');
    bounce.style.position= 'relative'; 
    bounce.style.left = '0px'; 
}
function moveRight() {
    bounce.style.left = parseInt(bounce.style.left) + 10 + 'px';
}
            
window.onload = init;

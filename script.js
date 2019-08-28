// Set the offset so the the mouse pointer matches your gif's pointer
var cursorOffset = {
   left : -30
 , top  : -20
}

document.getElementById('container').addEventListener("mousemove", function (e) {
  var $cursor = document.getElementById('cursor')

  $cursor.style.left = (e.pageX - cursorOffset.left) + 'px';
  $cursor.style.top = (e.pageY - cursorOffset.top) + 'px';

}, false);
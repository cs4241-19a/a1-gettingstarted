function playAnimation() {
  let circle = document.getElementById("circle");
  circle.r = 20;
  let id = setInterval(frame, 5);
  let position = 50;

  function frame() {
    if (position > 500) {
      clearInterval(id);
    } else if (position < 250) {
      position++;
      circle.setAttribute("cx", position);
    } else {
      position++;
      circle.setAttribute("cx", 550 - position);
    }
  }
}

function openSection(section) {
  var i;
  var x = document.getElementsByClassName("section");
  for(i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(section).style.display = "block";
}
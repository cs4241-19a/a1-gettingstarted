'use strict';

// This script is also usable on the alternative.html page
window.onload = function() {
  console.log( 'this javascript file was successfully loaded.' )
}

// Changes the document's background color,
// as long as the color entered is different and valid
function changeColor(color) {
  if (document.body.style.background !== color) {
    document.body.style.background = color;
  }
}

// Prompts the user if they'd like to refresh the page,
// and if not, see a different background color
// https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm
function refresh() {
  if (window.confirm("Do you want to refresh the page?")) {
    location.reload();
  } else {
    let color = window.prompt("Enter a new color for the page's background, (confirming with nothing entered will reset the color)"); 
      changeColor(color);  
  }
}

// Add event listener to document
// To reload the page if the user clicks anywhere on it
document.addEventListener("click", refresh, false);

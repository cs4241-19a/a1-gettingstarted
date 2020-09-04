"use strict";
let angle = 180;

window.onload = () => setInterval(updateGradient, 60);

const updateGradient = () => {
	document.body.style.backgroundImage = `linear-gradient(${angle}deg, rgba(0, 13, 255), rgba(0, 81, 255, 1), rgba(0, 145, 255,1), rgba(15, 173, 194, 1), rgba(30, 201, 133, 1), rgba(0, 156, 98, 1), rgba(0, 125, 69, 1))`;
	angle = (angle + 1) % 360;
};
function animate(options) {

	const start = performance.now();

	requestAnimationFrame(function animate(time) {
		let timeFraction = (time - start) / options.duration;
		if (timeFraction > 1) timeFraction = 1;

		const progress = options.timing(timeFraction);

		options.draw(progress);

		if (timeFraction < 1) {
			requestAnimationFrame(animate);
		}

	});
}

function makeEaseOut(timing) {
	return function(timeFraction) {
		return 1 - timing(1 - timeFraction);
	}
}

function bounce(timeFraction) {
	for (let a = 0, b = 1; 1; a += b, b /= 2) {
		if (timeFraction >= (7 - 4 * a) / 11) {
			return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
		}
	}
}

function a_dot() {
	const to1 = window.innerHeight/2 - 137;
	animate({
		duration: 3000,
		timing: makeEaseOut(bounce),
		draw: function(progress) {
			dot1.style.top = to1 * progress + 'px';
		}
	});
  
	const to2 = window.innerHeight/2 - (137 - 89);
	animate({
		duration: 3000,
		timing: makeEaseOut(bounce),
		draw: function(progress) {
			dot2.style.top = to2 * progress + 'px';
		}
	});
  
	const to3 = window.innerHeight/2 - (137 - 181);
	animate({
		duration: 3000,
		timing: makeEaseOut(bounce),
		draw: function(progress) {
			dot3.style.top = to3 * progress + 'px';
		}
	});
  
	const to4 = window.innerHeight/2 - (137 - 240);
	animate({
		duration: 3000,
		timing: makeEaseOut(bounce),
		draw: function(progress) {
			dot4.style.top = to4* progress + 'px';
		}
	});
}

window.onkeyup = function(e) {
	var key = e.key;
	if (key === 'a') {
		a_dot();
	}
};

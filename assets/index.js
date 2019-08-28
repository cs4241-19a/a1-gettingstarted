function animate(options) {

	var start = performance.now();

	requestAnimationFrame(function animate(time) {
		var timeFraction = (time - start) / options.duration;
		if (timeFraction > 1) timeFraction = 1;

		var progress = options.timing(timeFraction);

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
	for (var a = 0, b = 1; 1; a += b, b /= 2) {
		if (timeFraction >= (7 - 4 * a) / 11) {
			return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
		}
	}
}

function a_dot1() {
	var to = window.innerHeight/2 - 137;
	animate({
		duration: 3000,
		timing: makeEaseOut(bounce),
		draw: function(progress) {
			dot1.style.top = to * progress + 'px';
		}
	});
}

function a_dot2() {
	var to = window.innerHeight/2 - (137 - 89);
	animate({
		duration: 3000,
		timing: makeEaseOut(bounce),
		draw: function(progress) {
			dot2.style.top = to * progress + 'px';
		}
	});
}

function a_dot3() {
	var to = window.innerHeight/2 - (137 - 181);
	animate({
		duration: 3000,
		timing: makeEaseOut(bounce),
		draw: function(progress) {
			dot3.style.top = to * progress + 'px';
		}
	});
}

function a_dot4() {
	var to = window.innerHeight/2 - (137 - 240);
	animate({
		duration: 3000,
		timing: makeEaseOut(bounce),
		draw: function(progress) {
			dot4.style.top = to * progress + 'px';
		}
	});
}

window.onkeyup = function(e) {
	var key = e.key;
	if (key === ' ') {
		a_dot1();
		a_dot2();
		a_dot3();
		a_dot4();
	}
};

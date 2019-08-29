$(document).ready(function() {
    // Transition effect for navbar
    $(window).scroll(function() {
        // checks if window is scrolled more than 950px, adds/removes solid class
        if($(this).scrollTop() > 950) {
            $('#navB').addClass('solid');
            $('.nav-link').addClass('navSc');
        } else {
            $('#navB').removeClass('solid');
            $('.nav-link').removeClass('navSc');
        }
    });
});
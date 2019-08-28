$(document).ready(function() {
  $(".option").on("click", function() {
    alert("Hi");
    $('html,body').animate({
        scrollTop: $(".title.about").offset().top},
        'slow');
    });
  
                    
  
});


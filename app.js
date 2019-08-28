$(document).ready(function() {
  $(".option").hover( function(){
    $(this).css("background-color", "#6DB4D3");
  }, function() {
    $(this).css("background-color", "#2B82AB");
  });
  
  $(".option").click(function() {
      $('html,body').animate({
        scrollTop: $(".title.home").offset().top},
        'slow');
  });
  

  
                    
  
});


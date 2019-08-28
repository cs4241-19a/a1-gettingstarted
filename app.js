$(document).ready(function() {
  $(".option").hover( function(){
    $(this).css("background-color", "#6DB4D3");
  }, function() {
    $(this).css("background-color", "#2B82AB");
  });
  
  $(".option").click(function() {
    switch(this.class) {
        ".option.home" :
          break
        ".option.about" :
        break
        
    }
      
      $('html,body').animate({
        scrollTop: $(".title.home").offset().top},
        'slow');
  });
  
  $(".option.about").click(function() {
      $('html,body').animate({
        scrollTop: $(".title.about").offset().top},
        'slow');
  });
  
  $(".option.experience").click(function() {
      $('html,body').animate({
        scrollTop: $(".title.experience").offset().top},
        'slow');
  });
  
});


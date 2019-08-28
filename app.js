$(document).ready(function() {
  $(".option").hover( function(){
    $(this).css("background-color", "#6DB4D3");
  }, function() {
    $(this).css("background-color", "#2B82AB");
  });
  
  $(".option.home").click(function() {
      $('html,body').animate({
        scrollTop: $(".title.home").offset().top},
        'ease');
  });
  
  $(".option.about").click(function() {
      $('html,body').animate({
        scrollTop: $(".title.about").offset().top},
        'ease');
  });
  
  $(".option.experience").click(function() {
      $('html,body').animate({
        scrollTop: $(".title.experience").offset().top},
        'ease');
  });
  
});


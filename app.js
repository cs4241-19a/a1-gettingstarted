$(document).ready(function() {
  $(".option").hover( function(){
    $(this).css("background-color", "#6DB4D3");
  }, function() {
    $(this).css("background-color", "#2B82AB");
  });
  
  $(".option").click(function() {
    alert(this.className);
    switch(this.attr("class")) {
      case ".option.home" :
        $('html,body').animate({
          scrollTop: $(".title.home").offset().top},
          'slow');
        break;
      case ".option.about" :
        $('html,body').animate({
          scrollTop: $(".title.about").offset().top},
          'slow');
        break;
      case ".option.experience" :
        $('html,body').animate({
          scrollTop: $(".title.experience").offset().top},
          'slow');
        break;
      default:
        alert(this.attr('class'));
    }
      
  
  });
  
});


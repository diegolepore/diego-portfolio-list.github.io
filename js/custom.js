$(document).ready(function(){
  $("#banner-main").css("height",window.innerHeight - 250 + "px");
  $(window).resize(function(){
    $("#banner-main").css("height",window.innerHeight - 250 + "px");
  });
});

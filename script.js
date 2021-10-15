$('document').ready(function(){
  $('*').animate({
    opacity: 1
  }, 1000)
  $( "#about" ).animate({
    opacity: 1,
    top: "+=130",
  }, 1000, function() {
    // Animation complete.
  });
})
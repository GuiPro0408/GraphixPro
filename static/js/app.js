// Toggling the menu
$('.menu-toggle').click(function() {
  $(this).toggleClass('active');
  $('.main-nav').toggleClass('active');

  // add animation to open or close menu
  $('ul').css('animation', $(this).hasClass('active') ? 'open-menu-animation 0.5s forwards' : 'close-menu-animation 0.5s forwards');
});

// Toggling the menu
$('.menu-toggle').click(function() {
  $(this).toggleClass('active');
  $('.main-nav').toggleClass('active');

  // add animation to open or close menu
  $('ul').css('animation', $(this).hasClass('active') ? 'open-menu-animation 0.5s forwards' : 'close-menu-animation 0.5s forwards');
});

// if rezise windows and is bigger than 550px, then remove the active class and animation
$(window).resize(function() {
  if ($(window).width() > 550) {
    $('.menu-toggle').removeClass('active');
    $('.main-nav').removeClass('active');
    $('ul').css('animation', '');
  }
});

// fix the menu when scroll with smooth transition
$(window).scroll(function() {
  if ($(window).scrollTop() > 50) {
    $('.site-header').addClass('fixed');
  }
  else {
    $('.site-header').removeClass('fixed');
  }
});

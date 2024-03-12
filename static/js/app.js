// Toggling the menu
$('.menu-toggle').click(function() {
  $(this).toggleClass('active');
  $('.main-nav').toggleClass('active');

  // add animation to open or close menu
  $('ul').css('animation', $(this).hasClass('active') ? 'open-menu-animation 0.5s forwards' : 'close-menu-animation 0.5s forwards');
});

document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll('.slide_in');

  const options = {
    root: null, // uses the viewport
    threshold: 0.1, // 10% of the element must be in the viewport
    rootMargin: "200px", // from the top of the viewport
  };

  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let animationDirection = entry.target.getAttribute('data-animation');
        entry.target.classList.add(`slide-in-${animationDirection}`);
        observer.unobserve(entry.target); // Optional: Stop observing once animated
      }
    });
  }, options);

  elements.forEach(el => {
    observer.observe(el);
  });
});

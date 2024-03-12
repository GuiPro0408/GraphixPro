{/* <header class="site-header">
      <a href="{% url 'index' %}" class="logo-container">
        <img src="https://img.freepik.com/vecteurs-libre/symbole-anarchie-design-plat-dessine-main_23-2149244760.jpg?w=740&t=st=1710164909~exp=1710165509~hmac=7771938180154ad8ad3f17244ecac9c5036096a236c50036fbe41048afb89549" alt="Your Website Name" class="logo" />
        <h1 id="website-name">Graphix Pro</h1>
      </a>

      <nav class="main-nav">
        <div class="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul>
          <li>
            <a href="{% url 'index' %}" class="nav-link">Home</a>
          </li>
          <li>
            <a href="{% url 'about' %}" class="nav-link">About Us</a>
          </li>
          <li>
            <a href="{% url 'services' %}" class="nav-link">Services</a>
          </li>
          <li>
            <a href="{% url 'portfolio' %}" class="nav-link">Portfolio</a>
          </li>
          <li>
            <a href="{% url 'contact' %}" class="nav-link">Contact</a>
          </li>
        </ul>
      </nav>
    </header> */}

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

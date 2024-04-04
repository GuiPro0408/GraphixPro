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
    threshold: 0.5, // 10% of the element must be in the viewport
    rootMargin: "100px", // from the top of the viewport
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

const reviewWrap = document.getElementById("reviewWrap");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const imgDiv = document.getElementById("imgDiv");
const personName = document.getElementById("personName");
const profession = document.getElementById("profession");
const description = document.getElementById("description");
const surpriseMeBtn = document.getElementById("surpriseMeBtn");
const chicken = document.querySelector(".chicken");

let isChickenVisible;

let people = [
  {
    photo:
      'url("/static/img/png(1).jpeg")',
    name: "Ryan Juste",
    profession: "WEB DEVELOPER",
    description:
      "Turning to this team for our Vehicle Wrap and Signboard design completely transformed our company's road presence. Their professionalism, creativity, and attention to detail really made a difference. Every step of the process was smooth and transparent, resulting in a final product that exceeded all our expectations. I highly recommend their services to anyone looking to enhance their brand image."
  },

  {
    photo:
      "url('/static/img/png(2).jpg')",
    name: "Guillaume Juste",
    profession: "WEB DEVELOPER",
    description:
      "From our first collaboration, I was impressed by the exceptional quality of their work. The Posters, Number Plates, and Decals we ordered for our special event were far superior to what we had hoped for. The attention to detail and the team's dedication to meeting our specific needs were remarkable. A reliable and highly recommended partner for all your signage needs."
  },

  {
    photo:
      "url('')",
    name: "Adarsh Bhujan",
    profession: "GRAPHIC DESIGNER",
    description:
      "The efficiency and visual impact of the solutions offered by this company are unparalleled. Their work on the One Way Vision and Roller Banners not only caught attention but also conveyed our message perfectly. Additionally, the Window Tint for our premises significantly improved aesthetics while increasing our privacy. Their quality of service is exceptional, and I can only warmly recommend them."
  },

  {
    photo:
      "url('')",
    name: "Ayaz Jeetun",
    profession: "CAR WRAPPER",
    description:
      "Working with this team for our company's rebranding was an eye-opener. From creating Business Cards to installing a spectacular Illuminating Sign, every element was executed to perfection. Their innovation, ability to exceed expectations, and professionalism are unmatched. They offer a remarkable customer experience, making them the ideal partner for those looking to stand out."
  }
];

imgDiv.style.backgroundImage = people[0].photo;
personName.innerText = people[0].name;
profession.innerText = people[0].profession;
description.innerText = people[0].description;
let currentPerson = 0;

//Select the side where you want to slide
function slide(whichSide, personNumber) {
  let reviewWrapWidth = reviewWrap.offsetWidth + "px";
  let descriptionHeight = description.offsetHeight + "px";
  //(+ or -)
  let side1symbol = whichSide === "left" ? "" : "-";
  let side2symbol = whichSide === "left" ? "-" : "";

  let tl = gsap.timeline();

  if (isChickenVisible) {
    tl.to(chicken, {
      duration: 0.4,
      opacity: 0
    });
  }

  tl.to(reviewWrap, {
    duration: 0.4,
    opacity: 0,
    translateX: `${side1symbol + reviewWrapWidth}`
  });

  tl.to(reviewWrap, {
    duration: 0,
    translateX: `${side2symbol + reviewWrapWidth}`
  });

  setTimeout(() => {
    imgDiv.style.backgroundImage = people[personNumber].photo;
  }, 400);
  setTimeout(() => {
    description.style.height = descriptionHeight;
  }, 400);
  setTimeout(() => {
    personName.innerText = people[personNumber].name;
  }, 400);
  setTimeout(() => {
    profession.innerText = people[personNumber].profession;
  }, 400);
  setTimeout(() => {
    description.innerText = people[personNumber].description;
  }, 400);

  tl.to(reviewWrap, {
    duration: 0.4,
    opacity: 1,
    translateX: 0
  });

  if (isChickenVisible) {
    tl.to(chicken, {
      duration: 0.4,
      opacity: 1
    });
  }
}

function setNextCardLeft() {
  if (currentPerson === 3) {
    currentPerson = 0;
    slide("left", currentPerson);
  } else {
    currentPerson++;
  }

  slide("left", currentPerson);
}

function setNextCardRight() {
  if (currentPerson === 0) {
    currentPerson = 3;
    slide("right", currentPerson);
  } else {
    currentPerson--;
  }

  slide("right", currentPerson);
}

leftArrow.addEventListener("click", setNextCardLeft);
rightArrow.addEventListener("click", setNextCardRight);

surpriseMeBtn.addEventListener("click", () => {
  if (chicken.style.opacity === "0") {
    chicken.style.opacity = "1";
    imgDiv.classList.add("move-head");
    surpriseMeBtn.innerText = "Remove the chicken";
    surpriseMeBtn.classList.remove("surprise-me-btn");
    surpriseMeBtn.classList.add("hide-chicken-btn");
    isChickenVisible = true;
  } else if (chicken.style.opacity === "1") {
    chicken.style.opacity = "0";
    imgDiv.classList.remove("move-head");
    surpriseMeBtn.innerText = "Surprise me";
    surpriseMeBtn.classList.add("surprise-me-btn");
    surpriseMeBtn.classList.remove("hide-chicken-btn");
    isChickenVisible = false;
  }
});

window.addEventListener("resize", () => {
  description.style.height = "100%";
});

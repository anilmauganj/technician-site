// Owl Carousel
$(document).ready(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 2,
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });

  $(".left-nav").click(function () {
    owl.trigger("prev.owl.carousel");
  });

  $(".right-nav").click(function () {
    owl.trigger("next.owl.carousel");
  });
});

////////////////////////////////////////////

//Mobile Navigation
const mobileNav = document.getElementById("mobile-navigation");

mobileNav.addEventListener("click", function () {
  const nav = document.getElementById("main-navigation");
  nav.classList.toggle("open");
  mobileNav.classList.toggle("open");
});

//////////////////////////////////////

//Section Smooth Scrolling
document.querySelectorAll(".nav-list-link").forEach((item) => {
  item.addEventListener("click", function () {
    const target = document.getElementById(this.getAttribute("data-target"));

    const nav = document.getElementById("main-navigation");

    const mobileNav = document.getElementById("mobile-navigation");

    nav.classList.toggle("open");

    mobileNav.classList.toggle("open");

    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

////////////////////////////////////////////

//Back to Top
const backTop = document.querySelector(".back-top");

backTop.addEventListener("click", function () {
  const header = document.querySelector(".main-header");
  header.scrollIntoView({
    behavior: "smooth",
  });
});

//////////////////////////////////////////////////

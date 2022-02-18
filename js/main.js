$(document).ready(function () {
  // CAROUSEL

  $(".owl-carousel").owlCarousel({
    animateOut: "fadeOut",
    autoplay: true,
    autoplaySpeed: 1500,
    autoplayTimeout: 5000,
    dots: false,
    loop: true,
    items: 1,
  });

  //   CHECK IF THE NAV FOR HOMEPAGE

  $(window).on("load", function () {
    if ($(location).attr("pathname") == "/index.html") {
      $("nav").addClass("home");
      $("#logo").attr("src", "images/logo-large-white.png");
    }
  });
  // FIXING THE NAV WHILE SCROLLING
  const navHeight = $("nav").height();
  $(window).scroll(function () {
    if ($(window).scrollTop() > navHeight) {
      $("nav").removeClass("home");
      $("nav").css({
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
      });
      $("#logo").attr("src", "images/logo-large.png");
    }
    if ($(window).scrollTop() == 0) {
      $("nav").addClass("home");
      $("nav").css({
        position: "relative",
        top: "0",
        left: "0",
        width: "100%",
      });
      $("#logo").attr("src", "images/logo-large-white.png");
    }
  });

  // ACCARDION GALLERY

  $(".wrapper").hover(
    function () {
      $(".section-wrapper").removeClass("active");

      $(".index").hover(function () {
        $(".section-wrapper").removeClass("active");
        $(this).parents(".section-wrapper").addClass("active");
        $(".section-wrapper").css({
          width: "7%",
          overflow: "hidden",
          position: "relative",
        });
        $(this).parents(".section-wrapper").css({
          width: "100%",
          overflow: "hidden",
          position: "relative",
        });
      });
    },
    function () {
      $(".section-wrapper").css({
        width: "20%",
        overflow: "hidden",
        position: "relative",
      });
    }
  );

  // PAGE NAVIGATION

  const menuHeight = $(".nav-down").height();
  $(".nav-down li a").click(function () {
    $(this).parents("li").siblings("li").find("a").removeClass("active");
    $(this).addClass("active");
    const sectionTop = $(this.hash).offset().top - menuHeight;
    $("body, html").animate(
      {
        scrollTop: sectionTop,
      },
      1000
    );
  });

  // ELEVATOR
  $(window).scroll(function () {
    if ($(window).scrollTop() > 700) {
      $(".elevator").fadeIn();
    } else {
      $(".elevator").fadeOut();
    }
  });

  $(".elevator").click(function () {
    $("body, html").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });
});

// COUNTER

let cEx = document.querySelector(".c-ex h4");
let cTeam = document.querySelector(".c-team h4");
let cCust = document.querySelector(".c-cust h4");
let cDest = document.querySelector(".c-dest h4");
let cOff = document.querySelector(".c-off h4");
let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
const couterTop = document.querySelector(".counter-bg").offsetTop - 500;

let count = 0;
window.addEventListener("scroll", function () {
  if (window.scrollY > couterTop && count == 0) {
    const cExInterval = setInterval(() => {
      a++;
      cEx.innerHTML = a;
      if (a == 15) {
        clearInterval(cExInterval);
      }
    }, 100);

    const ctInterval = setInterval(() => {
      b++;
      cTeam.innerHTML = b;
      if (b == 22) {
        clearInterval(ctInterval);
      }
    }, 100);
    const cCustInterval = setInterval(() => {
      c++;
      cCust.innerHTML = c + "k";
      if (c == 250) {
        clearInterval(cCustInterval);
      }
    }, 10);

    const destInterval = setInterval(() => {
      d++;
      cDest.innerHTML = d;
      if (d == 175) {
        clearInterval(destInterval);
      }
    }, 10);
    const offInterval = setInterval(() => {
      e++;
      cOff.innerHTML = e;
      if (e == 40) {
        clearInterval(offInterval);
      }
    }, 50);
    count = 1;
  }
});

// ELEVATOR

// window.addEventListener("scroll", function () {
//   if (scrollY > 700) {
//     document.querySelector(".elevator").style.opacity = "1";
//   } else {
//     document.querySelector(".elevator").style.opacity = "0";
//   }
// });

/////////////////////////////////////   CHECK IF THE NAV FOR HOMEPAGE  /////////////////////////////

// window.addEventListener("load", function () {
//   if (window.location.pathname == "/index.html") {
//     document.querySelector("nav").classList.add("home");
//     document.getElementById("logo").src = "images/logo-large-white.png";
//   }
// });

// const navHeight = document.querySelector("nav").offsetHeight;
// console.log(navHeight);

// window.addEventListener("scroll", function () {
//   if (this.scrollY > navHeight) {
//     document.querySelector("nav").classList.remove("home");
//     document.querySelector("nav").style.position = "fixed";
//     document.querySelector("nav").style.top = "0";
//     document.querySelector("nav").style.left = "0";
//     document.querySelector("nav").style.width = "100%";
//     document.getElementById("logo").src = "images/logo-large.png";
//   }
//   if (this.scrollY == 0) {
//     document.querySelector("nav").classList.add("home");
//     document.querySelector("nav").style.position = "relative";
//     document.querySelector("nav").style.top = "0";
//     document.querySelector("nav").style.left = "0";
//     document.querySelector("nav").style.width = "100%";

//     document.getElementById("logo").src = "images/logo-large-white.png";
//   }
// });

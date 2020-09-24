/*eslint-disable*/
import gsap from "gsap";
import $ from "jquery";

// import "waypoints/lib/noframework.waypoints";
// import "waypoints/lib/shortcuts/inview";

class Header {
  constructor(header, navMenu) {
    // if (document.querySelector(".active-page")) {
    this.header = document.querySelector(header);
    this.navMenu = document.querySelector(navMenu);
    this.navBtn = document.querySelector(".nav-toggle");
    this.productMenu = document.querySelector(".js-sub-down-menu");
    this.productDrop = document.querySelector(".product-dropdown-list");
    this.init();
    // }
  }

  init() {
    this.onScrollHeader();
    this.animateBanner();
    this.animateCard();
    this.animateBannerText();
    this.animateHelpPanel();
    const self = this;

    this.navBtn.addEventListener("click", function () {
      self.navMenu.classList.toggle("active");
      self.navBtn.classList.toggle("is-open");
      $(".nav-header").toggleClass("menu-active");
      $("html").toggleClass("no-scroll");

      /**
       * Menu 🍔 animation
       */
      if (!self.header.classList.contains("is-active")) {
        self.header.classList.add("is-active");
      } else {
        if (window.scrollY < 200) {
          self.header.classList.remove("is-active");
        } else {
          return false;
        }
      }
      document.querySelector("html").classList.toggle("overflow-hidden");
    });

    // prod-dropdown
    this.productMenu.addEventListener("click", function () {
      self.productDrop.classList.toggle("is-open");
    });

    $("main").click(function () {
      $(".product-dropdown-list").removeClass("is-open");
    });

    // scroll to load to tab section
    $(document).ready(function () {
      setTimeout(function () {
        var activeTab = window.location.hash;
        if (activeTab) {
          $("html, body").animate(
            {
              scrollTop: $("#pills-tab").offset().top - 150,
            },
            1000
          );
        }

        if (activeTab == "#wired") {
          $("#pills-wired")[0].click();
        }

        if (activeTab == "#wireless") {
          $("#pills-wireless")[0].click();
        }
      }, 2000);
    });

    // scroll on click product tab
    $(".product-link").on("click", function () {
      $("html, body").animate(
        {
          scrollTop: $("#pills-tab").offset().top - 150,
        },
        600
      );
      var activeTab = this.hash.substr(0);
      if (activeTab == "#wired") {
        $("#pills-wired")[0].click();
      }

      if (activeTab == "#wireless") {
        $("#pills-wireless")[0].click();
      }
    });
  }

  onScrollHeader() {
    const self = this;

    /*-- Scroll Up/Down add class --*/
    let lastScrollTop = 0;
    $(window).on("touchmove mousewheel", function (event) {
      if ($(window).width() > 767) {
        // if (window.scrollY > 100) {
        if (window.scrollY > 10) {
          var st = $(this).scrollTop();
          if (st > lastScrollTop) {
            $(".nav-header").addClass("is-down");
            $(".product-dropdown-list").removeClass("is-open");
            $(".nav-header").removeClass("is-up");
          } else {
            $(".nav-header").addClass("is-up");
            $(".nav-header").removeClass("is-down");
          }
          lastScrollTop = st;
        }
      }
    });

    // var grydLight = document.querySelector("#grydLight");
    // var grydSpace = document.querySelector("#grydSpace");
    // var grydPark = document.querySelector("#grydPark");

    // console.log(Waypoint, InView);
    // var grydLightItem = new Waypoint.Inview({
    //   element: grydLight,
    //   enter: function (direction) {
    //     $(".products-nav-list li .product-nav-item").removeClass("active");
    //     document
    //       .querySelectorAll(".products-nav-list li")[0]
    //       .classList.add("active");
    //   },
    //   exit: function (direction) {
    //     document
    //       .querySelectorAll(".products-nav-list li")[0]
    //       .classList.add("active");
    //   },
    // });

    window.addEventListener("scroll", function () {
      self.checkHeader(window.scrollY);
      self.checkForStickyProductNav();
    });

    window.addEventListener("load", function () {
      self.checkHeader(window.scrollY);
      self.checkForStickyProductNav();
    });

    window.addEventListener("resize", function () {
      self.checkHeader(window.scrollY);
      self.checkForStickyProductNav();
    });
    // IE browser Header - Fixed
    if (!!window.MSInputMethodContext && !!document.documentMode) {
      $(window).on("touchmove mousewheel", function (event) {
        if (window.pageYOffset > 200) {
          $("header").addClass("bg-ie");
        } else if (window.pageYOffset < 200) {
          $("header").removeClass("bg-ie");
        }
      });
    }
  }

  checkForStickyProductNav() {
    var productsNavbar = document.querySelector(".products-sticky-nav");
    var grydLight = document.querySelector("#grydLight");
    var grydSpace = document.querySelector("#grydSpace");
    var grydPark = document.querySelector("#grydPark");

    const offset = window.innerWidth > 1440 ? 250 : 150;

    if (grydLight) {
      if (window.scrollY > grydLight.offsetTop - offset) {
        $(".products-nav-list li .product-nav-item").removeClass("active");
        $(".products-nav-list li")
          .eq(0)
          .find("product-nav-item")
          .addClass("active");
      }
    }

    if (grydSpace) {
      if (window.scrollY > grydSpace.offsetTop - offset) {
        $(".products-nav-list li").removeClass("active");
        $(".products-nav-list li").eq(1).addClass("active");
      } else {
        $(".products-nav-list li").removeClass("active");
        $(".products-nav-list li").eq(0).addClass("active");
      }
    }

    if (grydPark) {
      if (window.scrollY > grydPark.offsetTop - offset) {
        $(".products-nav-list li").removeClass("active");
        $(".products-nav-list li").eq(2).addClass("active");
      }
    }

    if (productsNavbar) {
      var productsList = document.querySelector(".js-products-list");
      var blogs = document.querySelector(".blogs-section");
      if (
        window.scrollY > productsList.offsetTop - 200 &&
        window.scrollY < blogs.offsetTop
      ) {
        console.log("reached");
        productsNavbar.classList.add("is-fixed");
      } else {
        productsNavbar.classList.remove("is-fixed");
      }
    }
  }

  checkHeader(scrollPos) {
    if (scrollPos > 50) {
      this.header.classList.add("is-active");
    } else {
      this.header.classList.remove("is-active");
    }
  }

  animateBanner() {
    const bannerTimeline = gsap.timeline({ paused: true });

    gsap.set(".nav-list", { autoAlpha: 0 });
    gsap.set(".nav-header .nav-logo", { autoAlpha: 0 });
    gsap.set(".nav-header .hamburg", { autoAlpha: 0 });
    gsap.set(".banner-home-panel", { x: 20, autoAlpha: 0 });

    bannerTimeline
      .fromTo(
        ".nav-header .nav-logo",
        { x: -20, autoAlpha: 0 },
        { x: 0, autoAlpha: 1 }
      )
      .fromTo(
        ".nav-header .hamburg",
        { y: -20, autoAlpha: 0 },
        { y: 0, autoAlpha: 1 }
      )
      .fromTo(
        ".nav-list",
        0.3,
        { x: -10, autoAlpha: 0 },
        { x: 0, autoAlpha: 1 }
      )
      .fromTo(
        ".banner-home-panel",
        { x: -20, autoAlpha: 0 },
        { x: 0, autoAlpha: 1 }
      );

    window.addEventListener("load", function () {
      bannerTimeline.play();
    });
  }

  // Component-text-animation
  animateBannerText() {
    const bannerTextTimeline = gsap.timeline({ paused: true });
    gsap.set(".component-text-animation .text1", { autoAlpha: 0 });
    bannerTextTimeline.fromTo(
      ".text1",
      { y: 0, autoAlpha: 0 },
      { y: -20, autoAlpha: 1 }
    );
    bannerTextTimeline.fromTo(
      ".text2",
      { y: 0, autoAlpha: 0 },
      { y: -30, autoAlpha: 1 }
    );
    bannerTextTimeline.fromTo(
      ".text3",
      { y: 0, autoAlpha: 0 },
      { y: -40, autoAlpha: 1 }
    );
    bannerTextTimeline.fromTo(
      ".text4",
      { y: 0, autoAlpha: 0 },
      { y: -50, autoAlpha: 1 }
    );
    window.addEventListener("scroll", function () {
      bannerTextTimeline.play();
    });
  }

  // component-card-animation
  animateCard() {
    const bannerCardTimeline = gsap.timeline({ paused: true });

    gsap.set(".component-card-animation .card1", { autoAlpha: 0 });

    bannerCardTimeline.fromTo(
      ".card1",
      { y: 0, autoAlpha: 0 },
      { y: -40, autoAlpha: 1 }
    );
    bannerCardTimeline.fromTo(
      ".card2",
      { y: 0, autoAlpha: 0 },
      { y: -50, autoAlpha: 1 }
    );
    bannerCardTimeline.fromTo(
      ".card3",
      { y: 0, autoAlpha: 0 },
      { y: -60, autoAlpha: 1 }
    );
    window.addEventListener("scroll", function () {
      bannerCardTimeline.play();
    });
  }

  // component-help-us
  animateHelpPanel() {
    const helpPanelTimeline = gsap.timeline({ paused: true });

    gsap.set(".help-panel .js-pane1", { autoAlpha: 0 });
    gsap.set(".help-panel .js-pane2", { autoAlpha: 0 });

    helpPanelTimeline.fromTo(
      ".js-pane1",
      { x: 0, autoAlpha: 0 },
      { x: 0, autoAlpha: 1 }
    );
    helpPanelTimeline.fromTo(
      ".js-pane2",
      { x: 0, autoAlpha: 0 },
      { x: 0, autoAlpha: 1 }
    );
    window.addEventListener("scroll", function () {
      helpPanelTimeline.play();
    });
  }
}

export default Header;

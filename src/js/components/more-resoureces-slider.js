/*eslint-disable*/
import $ from "jquery";
import Swiper from "swiper";

class ResourceSlider {
  constructor() {
    if (document.querySelector(".js-resourceslider")) {
      this.init();
    }
  }

  init() {
    const self = this;
    window.addEventListener("DOMContentLoaded", self.initResourceSwiper, false);
    window.addEventListener("resize", self.initResourceSwiper, false);
  }

  initResourceSwiper() {
    (function () {
      "use strict"; // breakpoint where swiper will be destroyed
      // and switches to a dual-column layout

      var breakpoint = window.matchMedia("(min-width:31.25em)"); // keep track of swiper instances to destroy later

      var mySwiper;
      var breakpointChecker = function breakpointChecker() {
        // if larger viewport and multi-row layout needed
        if (breakpoint.matches === true) {
          // clean up old instances and inline styles when available
          if (mySwiper !== undefined) mySwiper.destroy(true, true); // or/and do nothing

          return; // else if a small viewport and single column layout needed
        } else if (breakpoint.matches === false) {
          // fire small viewport version of swiper
          return enableSwiper();
        }
      };
      var enableSwiper = function enableSwiper() {
        mySwiper = new Swiper(".js-resourceSlider", {
          loop: false,
          slidesPerView: 1.2,
          centeredSlides: false,
          a11y: true,
          // effect: 'fade',
          keyboardControl: true,
          grabCursor: true,
          // pagination
          pagination: ".swiper-pagination",
          paginationClickable: true,
          observer: true,
          observeParents: true,
        });
      };

      breakpoint.addListener(breakpointChecker); // kickstart

      breakpointChecker();
    })();
  }
}

export default ResourceSlider;

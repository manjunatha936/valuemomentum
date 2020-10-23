/*eslint-disable*/
// import Swiper from "swiper";
import $ from "jquery";

class CasestudyDetails {
  constructor() {
    if (document.querySelector(".js-casestudy-details")) {
      this.init();
    }
    if (document.querySelector(".scroll-links")) {
      this.initScroll();
    }
  }

  init() {
    // Readmore and less
    $(document).ready(function () {
      if (window.innerWidth > 768) {
        $(".show-more-button").click(function () {
          $(this)
            .closest(".vm-hidden-data")
            .find(".hideContent")
            .toggleClass("hideAll");
          if (
            $(this)
              .closest(".vm-hidden-data")
              .find(".hideContent")
              .css("display") === "none"
          ) {
            $(this).text("Show More");
          } else {
            $(this).text("Show Less");
          }
        });
      }
    });

    // Hide and View snap chart
  }

  initScroll() {
    $(".link-item a").click(function(e) {

      let target = $(this).attr("data-target")
      e.preventDefault()
      $('html, body').animate({
          scrollTop: $("#"+target).offset().top - 80
      }, 1000);
  });
  }
}

export default CasestudyDetails;

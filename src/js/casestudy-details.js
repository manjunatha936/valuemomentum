/*eslint-disable*/
// import Swiper from "swiper";
import $ from "jquery";

class CasestudyDetails {
  constructor() {
    if (document.querySelector(".js-casestudy-details")) {
      this.init();
    }
  }

  init() {
    //

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
  }
}

export default CasestudyDetails;

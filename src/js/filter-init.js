// import $ from 'jquery'
import Filterizr from "filterizr";
Filterizr.installAsJQueryPlugin($);

class Filters {
  constructor() {
    if (document.querySelector(".filtr-container")) {
      this.init();
    }
  }

  init() {
    const options = {
      animationDuration: 0.5,
      callbacks: {
        onInit: function () {},

        onFilteringEnd: function () {
          if ($(".filter-tabs.active").length > 1) {
            $(".dot-red").show(1);
          } else {
            $(".dot-red").hide(1);
          }
        },
      },
      layout: "sameSize",
    };
    var filterizd = $(".filtr-container").filterizr(options);
    $(".filterizr-filter li").click(function () {
      // $('.filterizr-filter li').removeClass('filtr-active');
      // filterizd.filterizr('sort', 'title', 'asc');
      // $(this).addClass('filtr-active');

      var multifilter = $(this).data("multifilter");

      if (multifilter === "all") {
        $(".filterizr-filter li").removeClass("active");
        $(this).addClass("active");
        filterizd.filterizr("filter", "all");
        filterizd._fltr._toggledCategories = {};
      } else {
        $('.filterizr-filter li[data-multifilter="all"]').removeClass("active");
        $(this).toggleClass("active");
      }
    });

    //extra content

    // $(".extra-content-link").click(function (e) {
    //   e.preventDefault();
    //   $(".extra-content-wrp").toggleClass("show");
    // });
  }
}

export default Filters;

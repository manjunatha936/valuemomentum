// Eslint-disable
import "core-js/stable";
import "regenerator-runtime/runtime";
import $ from "jquery";
// import jQuery from "jquery";

// import "./smoth-scroll.js";

import "../scss/main.scss";

// import "bootstrap/js/dist/modal";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/tab";
import "bootstrap/js/dist/collapse";

import OverlayScrollbars from 'overlayscrollbars';

var instance = OverlayScrollbars($(".scroll-wrp"), {
 
});
// import "bootstrap/js/dist/modal";

// import "semantic-ui-css";

/** footer-animations **/

import FooterAnim from "./components/footer.js";
const footeranimate = new FooterAnim();
``;

if (process.env.NODE_ENV === "development") {
  // require("../pug/home.pug");
  // require("../pug/index.pug");
  // require("../pug/whitepaper-details.pug");
  // require("../pug/case-studies-details.pug");
  // require("../pug/case-studies.pug");
  // require("../pug/webinar.pug");
  // require("../pug/webinar-details.pug");
  // require("../pug/resource.pug");
}

// Eslint-disable-line no-console
console.log("Hi, my name is Common!");

import Filters from "./filter-init";
const filters = new Filters();

import ResourceSlider from "./components/more-resoureces-slider.js";
const resourceSlider = new ResourceSlider();

// white-papers details
import ModalPopup from "./white-paper-details.js";
const modalPopup = new ModalPopup();

// Case-stusy details   
import CasestudyDetails from "./casestudy-details.js";
const casestudyDetails = new CasestudyDetails();

import BlogDetails from "./blog-details.js";
const blogDetails = new BlogDetails();
// Load More Cards when you click load more button

// var parent = document.querySelector(".vm-show-cnt"),
//   items = parent.querySelectorAll(".content"),
//   loadMoreBtn = document.querySelector("#loadMore"),
//   maxItems = 6,
//   hiddenClass = "visually-hidden";

// [].forEach.call(items, function (item, idx) {
//   if (idx > maxItems - 1) {
//     item.classList.add(hiddenClass);
//   }
// });

// loadMoreBtn.addEventListener("click", function () {
//   [].forEach.call(document.querySelectorAll("." + hiddenClass), function (
//     item,
//     idx
//   ) {
//     console.log(item);
//     if (idx < maxItems - 1) {
//       item.classList.remove(hiddenClass);
//     }

//     if (document.querySelectorAll("." + hiddenClass).length === 0) {
//       loadMoreBtn.style.display = "none";
//     }
//   });
// });

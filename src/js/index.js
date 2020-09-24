// Eslint-disable
import "core-js/stable";
import "regenerator-runtime/runtime";
import $ from "jquery";
// import jQuery from "jquery";

// import "./smoth-scroll.js";
import { TimelineMax, TweenMax, TweenLite } from "gsap/all";
// import ScrollMagic from "scrollmagic";

import "../scss/main.scss";

import "bootstrap/js/dist/modal";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/tab";
import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/modal";
// import "./lightbox.lite.js";
// import "./gallery.js";

import "semantic-ui-css";

import Header from "./components/header";

/** footer-animations **/

import FooterAnim from "./components/footer.js";
const footeranimate = new FooterAnim();
``;

if (process.env.NODE_ENV === "development") {
  // require("../pug/home.pug");
  require("../pug/index.pug");
}

// Eslint-disable-line no-console
console.log("Hi, my name is Common!");

//Translate

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "en" },
    "google_translate_element"
  );
}

//For Live Projects
window.addEventListener("load", function () {
  document.querySelector("body").classList.add("loaded");
});

const headerElem = new Header(".nav-header", ".nav-menu");

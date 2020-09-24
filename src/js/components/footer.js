/*eslint-disable*/
import $ from "jquery";
import gsap from "gsap";

class FooterAnim {
  constructor() {
    if (document.querySelector(".background-animate")) {
      this.init();
    }
    if (document.querySelector(".bg-grey08")) {
      this.init();
    }
  }

  init() {
    var scrollMagicControllerfooter = new ScrollMagic.Controller();

    $(".background-animate").each(function () {
      var t4 = new gsap.timeline({}),
        footerExtend = $(this).find(".background-clr");
      t4.fromTo(
        footerExtend,
        1,
        {
          yPercent: 100,
          transformOrigin: "100% 0%",
          autoAlpha: 0,
          ease: "power1.InOut",
        },
        { yPercent: 0, autoAlpha: 1, y: 0, ease: "power1.InOut" }
      );
      t4.pause();

      /** scroll scenes */
      var bgAnimationfooter = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.6,
        reverse: true,
      })
        .on("start", function () {
          t4.play();
        })
        .addTo(scrollMagicControllerfooter);
    });

    var scrollMagicControllerfooter1 = new ScrollMagic.Controller();

    $("section").each(function () {
      var t4 = new gsap.timeline({}),
        footerExtend = $(this).find(".bg-grey08");
      t4.fromTo(
        footerExtend,
        1,
        {
          yPercent: 100,
          transformOrigin: "100% 0%",
          autoAlpha: 0,
          ease: "power1.InOut",
        },
        { yPercent: 0, autoAlpha: 1, y: 0, ease: "power1.InOut" }
      );
      t4.pause();

      /** scroll scenes */
      var bgAnimationfooter = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.6,
        reverse: true,
      })
        .on("start", function () {
          t4.play();
        })
        .addTo(scrollMagicControllerfooter1);
    });
  }
}

export default FooterAnim;

import $ from "jquery";

class Header {
  constructor(header) {
    this.header = $(header);
    this.body = $("body");
    this.html = $("html");
    this.isHeaderTransparent = this.header.hasClass("transparent");
    this.init();
  }
  init() {
    this.addListener();
  }

  addListener() {
    const self = this;
    // On scroll header fix
    $(window).on("scroll", () => {
      // Main Header
      if ($(window).scrollTop() >= 15) {
        if (!self.header.hasClass("sticky")) {
          // console.log("make header sticky");
          self.header.addClass("sticky");
          // self.logo.attr("src", self.colorLogo);
        }
      } else {
        self.header.removeClass("sticky");
        if (self.isHeaderTransparent) {
          // self.logo.attr("src", self.whiteLogo);
        }
      }
    });
  }
}
export default Header;

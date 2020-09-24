/*eslint-disable*/
import $ from "jquery";

class HeaderMenu {
  constructor() {
    if (document.querySelector(".active-page")) {
      this.init();
    }
  }

  init() {
    // prod-dropdown
    productMenu = document.querySelector(".js-sub-down-menu");
    productDrop = document.querySelector(".product-dropdown-list");
    productMenu.addEventListener("click", function () {
      self.productDrop.classList.toggle("is-open");
    });
  }
}

export default HeaderMenu;

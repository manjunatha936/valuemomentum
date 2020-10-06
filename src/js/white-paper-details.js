/*eslint-disable*/
import Swiper from "swiper";
// import $ from "jquery";

class ModalPopup {
  constructor() {
    if (document.querySelector(".js-modal-popup")) {
      this.init();
    }
  }

  init() {
    const modalTriggers = document.querySelectorAll(".vm-popup-trigger");
    // const modalCloseTrigger = document.querySelector(".vm-popup-modal__close");
    const body = document.querySelector("body");
    const overlayDiv = document.createElement("div");

    if (window.innerWidth < 768) {
      modalTriggers.forEach((trigger) => {
        trigger.addEventListener("click", () => {
          const { popupTrigger } = trigger.dataset;
          const popupModal = document.querySelector(
            `[data-popup-modal="${popupTrigger}"]`
          );

          popupModal.classList.add("is--visible");
          body.classList.add("overflow-hidden");
          body.before(overlayDiv);
          overlayDiv.classList.add("vm-blackedout");

          popupModal
            .querySelector(".vm-popup-modal__close")
            .addEventListener("click", () => {
              popupModal.classList.remove("is--visible");
              body.classList.remove("overflow-hidden");
              overlayDiv.classList.remove("vm-blackedout");
            });
        });
      });
    }
  }
}

export default ModalPopup;

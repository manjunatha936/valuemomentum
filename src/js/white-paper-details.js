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
    const node12 = document.querySelector(".vm-sticky-link");

    if (window.innerWidth < 768) {
      modalTriggers.forEach((trigger) => {
        trigger.addEventListener("click", (event) => {
          event.preventDefault();
          const { popupTrigger } = trigger.dataset;
          const popupModal = document.querySelector(
            `[data-popup-modal="${popupTrigger}"]`
          );

          popupModal.classList.add("is--visible");
          body.classList.add("overflow-hidden");
          body.before(overlayDiv);
          overlayDiv.classList.add("vm-blackedout");
          // node12.innerHTML = "Hide Snapshot";

          // Hide snapshot
          if (trigger.classList.contains("vm-hide")) {
            node12.innerHTML = "Hide Snapshot";
          } else {
            node12.innerHTML = "View Snapshot";
          }

          popupModal
            .querySelector(".vm-popup-modal__close")
            .addEventListener("click", (ev) => {
              ev.preventDefault();
              popupModal.classList.remove("is--visible");
              body.classList.remove("overflow-hidden");
              overlayDiv.classList.remove("vm-blackedout");

              // show snapshot

              if (popupModal.classList.contains("vm-view")) {
                node12.innerHTML = "View Snapshot";
              } else {
                node12.innerHTML = "View Snapshot";
              }
            });
        });
      });

      // Adding Hide and show content
    }
  }
}

export default ModalPopup;

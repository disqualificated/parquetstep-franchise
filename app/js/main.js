"use strict";

var btns = document.querySelectorAll(".btn");
var modalOverlay = document.querySelector(".modal-overlay ");
var modals = document.querySelectorAll(".modal");
var close = document.querySelector(".modal-close");

function removeOverlay() {
  modalOverlay.classList.remove("modal-overlay--visible");
}

function closeModal() {
  modals.forEach(function (el) {
    el.classList.remove("modal--visible");
    document.querySelector("body").style.overflow = "visible";
  });
}

btns.forEach(function (el) {
  el.addEventListener("click", function (e) {
    var path = e.currentTarget.getAttribute("data-path");
    closeModal();
    document.querySelector("[data-target=\"".concat(path, "\"]")).classList.add("modal--visible");
    modalOverlay.classList.add("modal-overlay--visible");
    document.querySelector("body").style.overflow = "hidden";
  });
});
modalOverlay.addEventListener("click", function (e) {
  if (e.target == modalOverlay) {
    removeOverlay();
    closeModal();
  }
});
close.addEventListener("click", function (e) {
  removeOverlay();
  closeModal();
});
//# sourceMappingURL=main.js.map

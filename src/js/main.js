const btns = document.querySelectorAll(".btn");
const modalOverlay = document.querySelector(".modal-overlay ");
const modals = document.querySelectorAll(".modal");
const close = document.querySelector(".modal-close");

function removeOverlay() {
  modalOverlay.classList.remove("modal-overlay--visible");
}
function closeModal() {
  modals.forEach((el) => {
    el.classList.remove("modal--visible");
    document.querySelector("body").style.overflow = "visible";
  });
}

btns.forEach((el) => {
  el.addEventListener("click", (e) => {
    let path = e.currentTarget.getAttribute("data-path");

    closeModal();

    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("modal--visible");
    modalOverlay.classList.add("modal-overlay--visible");
    document.querySelector("body").style.overflow = "hidden";
  });
});

modalOverlay.addEventListener("click", (e) => {
  if (e.target == modalOverlay) {
    removeOverlay();
    closeModal();
  }
});

close.addEventListener("click", (e) => {
  removeOverlay();
  closeModal();
});

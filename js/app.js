(function IIEF() {
  window.addEventListener("load", documentLoaded);

  function documentLoaded() {
    sharePopupFunc();
  }

  function sharePopupFunc() {
    let shareBtn = document.getElementById("share-btn");
    let sharePopup = document.getElementById("share-popup");

    shareBtn.addEventListener("click", function () {
      if (!sharePopup.classList.contains("card__share-box--show")) {
        sharePopup.classList.add("card__share-box--show");
        sharePopup.setAttribute("aria-hidden", "false");
        shareBtn.classList.add("card__share-icon--active");
        shareBtn.setAttribute("aria-expanded", "true");
      } else {
        sharePopup.classList.remove("card__share-box--show");
        sharePopup.setAttribute("aria-hidden", "true");
        shareBtn.classList.remove("card__share-icon--active");
        shareBtn.setAttribute("aria-expanded", "false");
      }
    });
  }
})();

var welcomePopup = document.getElementById("welcome-popup");
var welcomeClose = document.querySelector(".welcome__close");

welcomeClose.addEventListener("click", closePopup);
window.addEventListener("click", outsidePopup);

setTimeout(function() {
  welcomePopup.style.display = "block";
}, 3000);

function closePopup() {
  welcomePopup.style.display = "none";
}

function outsidePopup(e) {
  if (e.target == welcomePopup) {
    welcomePopup.style.display = "none";
  }
}

var overlay = document.getElementById("overlay");

var closeBtn = document.getElementById("close");
var button = document.getElementById("btn");
button.addEventListener("click", (e) => {
  e.preventDefault();
  overlay.style.display = "flex";
});

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  overlay.style.display = "none";
});
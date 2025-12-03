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

const faq = document.querySelectorAll(".faq-item");

faq.forEach((element) => {
  element.lastElementChild.style.display = "none";
  element.firstElementChild.style.cursor = "pointer";
});

faq.forEach((elem) => {
  elem.firstElementChild.addEventListener("click", () => {
    elem.lastElementChild.style.display =
      elem.lastElementChild.style.display === "none" ? "block" : "none";
  });
});

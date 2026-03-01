import "./styles.css";
//this is for the see more button i talked about!
var button = document.getElementById("see-more");
var hiddenText = document.getElementById("hidden-text");
var originalText = document.getElementById("original-text");
button.addEventListener("click", showHide);
function showHide() {
  hiddenText.classList.toggle("show");
  originalText.classList.toggle("hide");
  button.textContent = hiddenText.classList.contains("show")
    ? "See less"
    : "See more";
}

const accordions = document.getElementsByClassName("accordion");

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

button.addEventListener("click", e => {
  document.body.style.backgroundColor = colorSpan.textContent = getRandomHexColor();
});
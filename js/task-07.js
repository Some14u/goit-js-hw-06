const slider = document.getElementById("font-size-control");
const text = document.getElementById("text");

slider.addEventListener("input", onChangeFontSize);
onChangeFontSize();

function onChangeFontSize() {
  text.style.fontSize = slider.value + "px";
}
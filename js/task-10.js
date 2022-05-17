const STARTER_SIZE = 30;
const INCREMENT = 10;

const base = document.getElementById("controls");
const boxesContainer = document.getElementById("boxes");
const input = base.querySelector("input");
const createBtn = base.querySelector("[data-create]");
const destroyBtn = base.querySelector("[data-destroy]");

createBtn.addEventListener("click", e => createBoxes(input.value));
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  if (!amount) return;
  const boxes = [];
  for(let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = box.style.height = `${STARTER_SIZE + i * INCREMENT}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

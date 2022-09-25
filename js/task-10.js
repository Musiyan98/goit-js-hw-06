const inputNumberEl = document.querySelector("input[type='number']");
const createEl = document.querySelector("button[data-create]");
const destroyEl = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");

createEl.addEventListener("click", onCreateCollectionsBox);
destroyEl.addEventListener("click", ondestroyCollectionsBox);

function onCreateCollectionsBox(e) {
  let sizeOnBox = 30;
  let zIndex = 100;
  let amount = inputNumberEl.value;
  for (let i = 0; i < amount; i++) {
    createBoxes(sizeOnBox, zIndex);
    sizeOnBox += 10;
    zIndex -= 1;
  }
}

function ondestroyCollectionsBox(e) {
  boxesEl.innerHTML = "";
  inputNumberEl.value = "";
}

function createBoxes(sizeOnBox, zIndex) {
  let color = getRandomHexColor();
  let box = document.createElement("div");
  box.classList.add("box-item");
  box.style.backgroundColor = `${color}`;
  box.style.width = `${sizeOnBox}px`;
  box.style.height = `${sizeOnBox}px`;
  box.style.zIndex = `${zIndex}`;
  boxesEl.append(box);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorBgEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");
const btnChangeColorBgEl = document.querySelector(".change-color");

btnChangeColorBgEl.addEventListener("click", onChangeColor);

function onChangeColor(e) {
  let color = getRandomHexColor();
  bodyEl.style.backgroundColor = `${color}`;
  colorBgEl.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

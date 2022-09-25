const inputEl = document.querySelector("#font-size-control");
const outputTextEl = document.querySelector("#text");

inputEl.addEventListener("input", onChangeFontSize);

function onChangeFontSize(e) {
  outputTextEl.style.fontSize = `${inputEl.value}px`;
}

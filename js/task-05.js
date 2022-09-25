const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onClickGreeting);

function onClickGreeting(e) {
  if (e.currentTarget.value == false) {
    outputEl.textContent = "Anonymous";
  } else {
    outputEl.textContent = inputEl.value;
  }
}

const inputEl = document.querySelector("#validation-input");
const correctlyLengthEl = document.querySelector("input[data-length]");



inputEl.addEventListener("input", onAuditCorrect);

function onAuditCorrect(e) {
  if (inputEl.value.length === inputEl.dataset.length.value) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}

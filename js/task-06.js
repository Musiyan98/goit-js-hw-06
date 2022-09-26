const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("input", onAuditCorrect);

function onAuditCorrect(e) {
  if (inputEl.value.length == inputEl.dataset.length) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}

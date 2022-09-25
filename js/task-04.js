const counterEl = document.querySelector("#value");
const decrementEl = document.querySelector("button[data-action='decrement']");
const incrementEl = document.querySelector("button[data-action='increment']");

let counterValue = 0;

decrementEl.addEventListener("click", decrement);
incrementEl.addEventListener("click", increment);

function decrement(e) {
  counterValue -= 1;
  counterEl.textContent = counterValue;
}

function increment(e) {
  counterValue += 1;
  counterEl.textContent = counterValue;
}

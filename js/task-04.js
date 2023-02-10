let counterValue = 0;
const counterEl = document.querySelector("#value");

const increaseButtonEl = document.querySelector(
  'button[data-action="increment"]'
);
const decreaseButtonEl = document.querySelector(
  'button[data-action="decrement"]'
);

increaseButtonEl.addEventListener("click", () => {
  counterValue += 1;
  counterEl.textContent = counterValue;
});

decreaseButtonEl.addEventListener("click", () => {
  counterValue -= 1;
  counterEl.textContent = counterValue;
});

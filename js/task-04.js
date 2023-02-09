let counterValue = 0;
const counter = document.querySelector("#value");

const increaseButton = document.querySelector(
  'button[data-action="increment"]'
);
const decreaseButton = document.querySelector(
  'button[data-action="decrement"]'
);

increaseButton.addEventListener("click", () => {
  counterValue += 1;
  counter.textContent = counterValue;
});

decreaseButton.addEventListener("click", () => {
  counterValue -= 1;
  counter.textContent = counterValue;
});

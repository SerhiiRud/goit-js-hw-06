function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesEl = document.querySelector("#boxes");
const inputEl = document.querySelector("#controls > input");
const buttonCreateEl = document.querySelector('button[data-create]');
const buttonDestroyEl = document.querySelector('button[data-destroy]');

function createBoxes(amount) {
  const initialSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.width = `${initialSize + i * 10}px`;
    divEl.style.height = `${initialSize + i * 10}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    boxesEl.append(divEl);   
} 
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}

buttonCreateEl.addEventListener("click", event => {
  createBoxes(inputEl.value);
});

buttonDestroyEl.addEventListener("click", destroyBoxes);





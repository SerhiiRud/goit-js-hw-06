function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorChangerButtonEl = document.querySelector(".change-color");
const colorOutputEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");

colorChangerButtonEl.addEventListener("click", colorPicker);

function colorPicker() {
  const colorHex = getRandomHexColor();
  bodyEl.style.backgroundColor = colorHex;
  colorOutputEl.textContent = colorHex;
};
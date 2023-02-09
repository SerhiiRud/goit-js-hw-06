const fontPicker = document.querySelector("#font-size-control");
const textElement = document.querySelector("#text");
const fontChanger = () => {
  textElement.style.fontSize = `${fontPicker.value}px`;
};
fontPicker.addEventListener("input", fontChanger);

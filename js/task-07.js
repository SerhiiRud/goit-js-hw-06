const fontPickerEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
const fontChanger = () => {
  textEl.style.fontSize = `${fontPickerEl.value}px`;
};
fontPickerEl.addEventListener("input", fontChanger);

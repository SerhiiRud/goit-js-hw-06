const nameOutputEl = document.querySelector("#name-output");
const nameInputEl = document.querySelector("#name-input");

nameInputEl.addEventListener("input", () => {
  nameOutputEl.textContent = nameInputEl.value;
  if (nameInputEl.value === "") {
    nameOutputEl.textContent = "Anonymous";
  }
});

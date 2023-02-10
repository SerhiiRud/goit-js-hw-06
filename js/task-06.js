const inputFormEl = document.querySelector("#validation-input");

const borderSwitcher = () => {
  if (
    Number(inputFormEl.value.length) ===
    Number(inputFormEl.getAttribute("data-length"))
  ) {
    inputFormEl.classList.remove("invalid");
    inputFormEl.classList.add("valid");
  } else {
    inputFormEl.classList.remove("valid");
    inputFormEl.classList.add("invalid");
  }
};

inputFormEl.addEventListener("blur", borderSwitcher);

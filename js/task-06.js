const inputForm = document.querySelector("#validation-input");

const borderSwitcher = () => {
  if (
    Number(inputForm.value.length) ===
    Number(inputForm.getAttribute("data-length"))
  ) {
    inputForm.classList.remove("invalid");
    inputForm.classList.add("valid");
  } else {
    inputForm.classList.remove("valid");
    inputForm.classList.add("invalid");
  }
};

inputForm.addEventListener("blur", borderSwitcher);

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");
const tempRepo = [];
ingredients.map((ingredient) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("item");
  tempRepo.push(listItem);
});
listEl.append(...tempRepo);

// const listElements = ingredients
//   .map((ingredient) => `<li>${ingredient}</li>`)
//   .join("");
// listEl.insertAdjacentHTML("beforebegin", listElements);

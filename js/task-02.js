const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

ingredients.map((ingredient) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("item");
  list.append(listItem);
});

// const listElements = ingredients
//   .map((ingredient) => `<li>${ingredient}</li>`)
//   .join("");
// list.insertAdjacentHTML("beforebegin", listElements);

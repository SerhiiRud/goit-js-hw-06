const categoriesEl = document.querySelector("#categories");
const categoriesItems = [...categoriesEl.children];
console.log("Number of categories: ", categoriesItems.length);

//------for-of-----
// for (const category of categoriesItems) {
//   console.log("Category: ", category.firstElementChild.textContent);
//   console.log("Elements: ", category.lastElementChild.children.length);
// }

//------forEach-----
// categoriesItems.forEach((item) => {
//   console.log(`Category: ${item.firstElementChild.textContent}`);
//   console.log(`Elements: ${item.lastElementChild.children.length}`);
// });

//------map-----
const result = categoriesItems
  .map(
    (category) =>
      `Category: ${category.firstElementChild.textContent} \nElements: ${
        category.lastElementChild.children.length
      }`
  )
  .join("\n\n");
console.log(result);

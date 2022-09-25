const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const items = ingredients.map((el) => {
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  listItem.innerHTML = el;
  return listItem;
});
listEl.append(...items);

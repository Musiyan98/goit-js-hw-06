const allCategoriesEl = document.querySelectorAll(".item");

console.log("Number of categories:", allCategoriesEl.length);

allCategoriesEl.forEach((item) => {
  let tittleEl = item.querySelector("h2");
  console.log("Category:", tittleEl.textContent);

  let subListItemEl = item.querySelector("ul").children;
  console.log("Elements:", subListItemEl.length);
});

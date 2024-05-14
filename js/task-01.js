const categoriesList = document.getElementById("categories");
const categoryItems = categoriesList.querySelectorAll("li.item");
const totalCategories = categoryItems.length;
console.log(`Number of categories: ${totalCategories}`);

categoryItems.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  const categoryElements = item.querySelectorAll("li").length;

  console.log(`Category: ${categoryTitle}
  Elements: ${categoryElements}`);
});

const categories = document.querySelectorAll("#categories ul");

console.log("Number of categories:", categories.length);

categories.forEach(({previousElementSibling, children}) => {
  console.log("\nCategory:", previousElementSibling.textContent);
  console.log("Elements:", children.length);
});


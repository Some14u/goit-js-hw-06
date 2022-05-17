const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elements = ingredients.map(name => {
  const element = document.createElement("li");
  element.innerText = name;
  element.classList.add("item");
  return element;
});

document.getElementById("ingredients").append(...elements);

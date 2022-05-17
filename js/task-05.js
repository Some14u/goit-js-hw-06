const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

input.addEventListener("input", ({target: input}) => {
  output.textContent = input.value || "Anonymous";
});
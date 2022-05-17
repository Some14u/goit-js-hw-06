// В обоих случаях учитывается то, что в пустом поле рамка должна быть серая

document.getElementById("validation-input")
  .addEventListener("blur", ({target : input}) =>
  (valid => input.classList.toggle("invalid", valid!=="" && !input.classList.toggle("valid", valid)))
  (input.value && input.value.length == input.dataset.length));

// =================== ОЖИДАЕМЫЙ ВАРИАНТ ===================

// const input = document.querySelector("#validation-input");
// input.addEventListener("blur", ({target : input}) => {
//   input.classList.remove("valid", "invalid");
//   if (input.value === "") return;
//   if (input.value.length == input.dataset.length) {
//     input.classList.add("valid");
//   } else {
//     input.classList.add("invalid");
//   }
// });





const form = document.querySelector(".login-form");

form.addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(form);
  const toSend = {}
  if (Array.from(data).reduce((hasEmpty, item) => {
    data[item[0]] = item[1];
    return hasEmpty || !item[1].trim()
  }, false)) {
    alert("Предупреждение о том, что все поля должны быть заполнены :)");
    return;
  }
  data.forEach((value, key) => toSend[key] = value);
  console.table(toSend);
  form.reset();
});


// =================== ОЖИДАЕМЫЙ ВАРИАНТ ===================

// form.addEventListener("submit", event => {
//   event.preventDefault();
//   const data = new FormData(form);
//   let isOk = true;
//   data.forEach(val => isOk = isOk && val.trim() != "");
//   if (!isOk) {
//     alert("Все поля должны быть заполнены.");
//     return;
//   }
//   const toSend = {}
//   data.forEach((value, key) => toSend[key] = value);
//   console.log(toSend);
//   form.reset();
// });
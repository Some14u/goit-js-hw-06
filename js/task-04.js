var counterValue = 0;
const actions = {
  increment: (cb) => { counterValue++; cb() },
  decrement: (cb) => { counterValue--; cb() },
}

document.getElementById("counter")
  .addEventListener("click", ({target:{dataset:{action}}}) => {
    action && actions[action](
      () => document.getElementById("value").textContent = counterValue
    );
  });

// =================== ОЖИДАЕМЫЙ ВАРИАНТ ===================

// const output = document.querySelector("#value");
// document.querySelector('button[data-action="increment"]')
//   .addEventListener("click", () => {
//     counterValue += 1;
//     output.textContent = counterValue;
//  });
// document.querySelector('button[data-action="decrement"]')
//   .addEventListener("click", () => {
//     counterValue -= 1;
//     output.textContent = counterValue;
// });


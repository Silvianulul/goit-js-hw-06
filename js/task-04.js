let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterSpan = document.getElementById("value");

counterSpan.textContent = counterValue;

decrementBtn.addEventListener("click", () => {
  counterValue--;
  counterSpan.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
  counterValue++;
  counterSpan.textContent = counterValue;
});

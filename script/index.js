import array from "./array.js";

const text = document.querySelector(".content__text");
const win = window.document;

function randomClick() {
  const random = array[Math.floor(Math.random() * array.length)];
  const random2 = array[Math.floor(Math.random() * array.length)];
  text.textContent = random[0].toUpperCase() + random.slice(1) + " " + random2;
}

win.addEventListener("click", randomClick);

randomClick();

const buttons = [...document.querySelectorAll(".button")];
const screen = document.querySelector(".screen");

let result = 0;
let operation = "";
let numbers = [];

const checkButtonType = (e) => {
  if (e.target.classList.contains("digit")) {
    const number = Number(e.target.textContent);
    if (screen.textContent === "0") {
      screen.textContent = number;
    } else {
      screen.textContent += number;
    }
  }
  if (e.target.classList.contains("reset")) {
    screen.textContent = "0";
    numbers = [];
    operation = "";
  }
  if (e.target.classList.contains("addition")) {
    operation = "add";
  }
  if (e.target.classList.contains("equal")) {
    console.log(numbers);
  }
};

buttons.forEach((button) => button.addEventListener("click", checkButtonType));

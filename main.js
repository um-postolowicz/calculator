const buttons = [...document.querySelectorAll(".button")];
const screen = document.querySelector(".screen");

let result = 0;
let operation = "";
let numbers = [];

const operations = () => {
  if (operation === "add") {
    numbers.forEach((number) => {
      result += number;
    });
    return result;
  }
  if (operation === "multiply") {
    result = numbers.reduce((a, b) => a * b);
    return result;
  }
};

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
    result = 0;
  }
  if (e.target.classList.contains("addition")) {
    numbers.push(Number(screen.textContent));
    if (operation === "result") {
      numbers = [];
    }
    operation = "add";
    screen.textContent = 0;
  }
  if (e.target.classList.contains("multiplication")) {
    if (operation === "result") {
      numbers = [];
    }
    numbers.push(Number(screen.textContent));
    operation = "multiply";
    screen.textContent = 0;
  }
  if (e.target.classList.contains("equal")) {
    if (screen.textContent !== "0") numbers.push(Number(screen.textContent));
    operations();
    console.log(numbers);
    screen.textContent = result;
    operation = "result";
  }
};

buttons.forEach((button) => button.addEventListener("click", checkButtonType));

const buttons = [...document.querySelectorAll(".button")];
const screen = document.querySelector(".screen");

let emptyScreen = false;
let numbers = [];
let operation = "";
let operationNumber = 0;
let result = 0;

const operations = () => {
  if (operation === "add") {
    numbers.forEach((number) => {
      result += number;
    });
    return result;
  }
  if (operation === "divide") {
    result = numbers.reduce((a, b) => a / b);
    if (numbers[1] === 0) {
      result = "No division by 0!";
      screen.classList.add("noSolution");
    }
    return result;
  }
  if (operation === "multiply") {
    result = numbers.reduce((a, b) => a * b);
    return result;
  }
  if (operation === "subtract") {
    result = numbers[0];
    for (i = 1; i < numbers.length; i++) {
      result -= numbers[i];
    }
    return result;
  }
  if (operation === "power") {
    result = Math.pow(numbers[0], numbers[1]);
    return result;
  }
  if (operation === "root") {
    if (numbers[0] < 0 && numbers[1] % 2 !== 1) {
      result = "No solution!";
      screen.classList.add("noSolution");
      return result;
    } else if (numbers[0] > 0 && numbers[1] % 2 !== 1) {
      const number = Math.pow(numbers[0], 1 / numbers[1]);
      result = number + " or " + -number;
      screen.classList.add("twoSolutions");
      return result;
    } else {
      result =
        (numbers[0] < 0 ? -1 : 1) *
        Math.pow(Math.abs(numbers[0]), 1 / numbers[1]);
      return result;
    }
  }
  if (operation === "percent") {
    result = numbers[1] * (numbers[0] / 100);
    return result;
  }
};

const handleOperation = (operationType) => {
  emptyScreen = true;
  if (operation === "result") {
    numbers = [];
    result = 0;
  }
  if (operationNumber === 1) return;
  numbers.push(Number(screen.textContent));
  operation = operationType;
  screen.textContent = numbers[0];
  operationNumber = 1;
};

const checkButtonType = (e) => {
  if (
    e.target.classList.contains("digit") ||
    e.target.classList.contains("decimal")
  ) {
    const number = Number(e.target.textContent);
    if (screen.textContent !== "0" && !emptyScreen) {
      screen.textContent += number;
    } else {
      screen.textContent = number;
      if (e.target.classList.contains("decimal")) {
        screen.textContent = "0" + `${e.target.textContent}`;
      }
    }
    emptyScreen = false;
  }
  if (e.target.classList.contains("reset")) {
    screen.textContent = "0";
    numbers = [];
    operation = "";
    result = 0;
    screen.classList.remove("noSolution");
    screen.classList.remove("twoSolutions");
  }
  if (e.target.classList.contains("sign")) {
    let number = Number(screen.textContent);
    screen.textContent = -number;
  }
  if (e.target.classList.contains("addition")) {
    handleOperation("add");
  }
  if (e.target.classList.contains("division")) {
    handleOperation("divide");
  }
  if (e.target.classList.contains("multiplication")) {
    handleOperation("multiply");
  }
  if (e.target.classList.contains("subtraction")) {
    handleOperation("subtract");
  }
  if (e.target.classList.contains("squared")) {
    let number = Number(screen.textContent);
    screen.textContent = number * number;
  }
  if (e.target.classList.contains("power")) {
    handleOperation("power");
  }
  if (e.target.classList.contains("square-root")) {
    let number = Number(screen.textContent);
    if (number < 0) {
      screen.textContent = "No solution!";
      screen.classList.add("noSolution");
    } else {
      screen.textContent = Math.sqrt(number);
    }
  }
  if (e.target.classList.contains("root")) {
    handleOperation("root");
  }
  if (e.target.classList.contains("percent")) {
    handleOperation("percent");
  }
  if (e.target.classList.contains("fraction")) {
    let number = Number(screen.textContent);
    screen.textContent = 1 / number;
  }
  if (e.target.classList.contains("equal")) {
    if (screen.textContent !== "0" || (screen.textContent === "0" && operation))
      numbers.push(Number(screen.textContent));
    operations();
    console.log(`Equal: ${numbers}`);
    screen.textContent = result;
    operation = "result";
    operationNumber = 0;
  }
};

buttons.forEach((button) => button.addEventListener("click", checkButtonType));

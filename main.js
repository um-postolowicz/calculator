const buttons = [...document.querySelectorAll(".button")];
const screen = document.querySelector(".screen");

const checkButtonType = (e) => {
  if (e.target.classList.contains("digit")) {
    const number = Number(e.target.textContent);
    screen.textContent = number;
  }
  if (e.target.classList.contains("reset")) {
    screen.textContent = "0";
  }
};

buttons.forEach((button) => button.addEventListener("click", checkButtonType));

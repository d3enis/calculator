function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
    case "/":
      return divide(a, b);
      break;
    case "*":
      return multiply(a, b);
      break;
  }
}
//variables for displaying number
let currValue;
let displayValue = "";
let display = document.querySelector(".display");
//displaying number
function showValue(btn) {
  currValue = btn.toElement.innerText;
  displayValue += currValue;
  display.innerText = displayValue;
}
//adding listener for click
let btnList = Array.from(calculator.querySelectorAll("button"));
btnList.forEach((btn) => {
  btn.addEventListener("click", (btn) => {
    showValue(btn);
    selectAction();
  });
});

function selectAction() {
  switch (true) {
    case Number.isInteger(parseInt(currValue)):
      operands();
      break;

    case Number.isNaN(parseInt(currValue)):
      setOperator();
      display.innerText = operate(operator, fNumber, sNumber);
      // fNumber = 0;
      // sNumber = 0;
      // operator = 0;
      // currValue = 0;
      // currNumber = 0;
      // displayValue = "";
      break;
  }
}

//function for saving operands
let currNumber = "";
let fNumber = "";
let sNumber = "";
let operator = "";

function operands() {
  currNumber += currValue;
  if (operator == "") fNumber = parseInt(currNumber);
  if (operator != "") sNumber = parseInt(currNumber);
  return;
}

function setOperator() {
  operator = currValue;
  currValue = "";
  currNumber = "";
  return;
}

// Napravi zbrajanje vise brojeva //

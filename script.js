let currNumber = "";
let fNumber = "";
let sNumber = "";
let operator = "";

var operacije = {
  add: function (a, b) {
    return a + b;
  },

  subtract: function (a, b) {
    return a - b;
  },

  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
};

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return operacije.add(a, b);

      break;
    case "-":
      return operacije.subtract(a, b);

    case "/":
      return operacije.divide(a, b);
      break;
    case "*":
      return operacije.multiply(a, b);
      break;
  }
}
//variables for displaying number
let currValue = "";
let displayValue = "";
let display = document.querySelector(".display");
//displaying number
function showValue(btn) {
  currValue = btn;
  displayValue += currValue;
  display.innerText = displayValue.toString();
}
//adding listener for click
let btnList = Array.from(calculator.querySelectorAll("button"));
btnList.forEach((btn) => {
  btn.addEventListener("click", (btn) => {
    btn1 = btn["path"]["0"]["innerHTML"].toString();
    console.log(btn1);
    showValue(btn1);
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

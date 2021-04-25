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
    case 1:
      return add(a, b);
      break;
    case 2:
      return subtract(a, b);
      break;
    case 3:
      return divide(a, b);
      break;
    case 4:
      return multiply(a, b);
      break;
  }
}
let currValue;
function getValue(btn) {
  currValue = btn.toElement.innerText;
  console.log(currValue);
}

let btnList = Array.from(calculator.querySelectorAll("button"));
btnList.forEach((btn) => {
  btn.addEventListener("click", (btn) => getValue(btn));
});

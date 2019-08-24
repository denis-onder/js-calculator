const keys = document.querySelectorAll(".calculator_key");
const output = document.getElementById("calculator_output");
const equalsKey = document.getElementById("calculator_equals_key");

let state = [];

function setValueToOutput(value = "") {
  if (value === "") {
    output.innerHTML = "";
    state = [];
  } else {
    output.innerHTML += value;
  }
}

function setOperator(operator) {
  if (state.length === 1) {
    state.push(operator);
    setValueToOutput(operator);
  } else {
    console.log("Operator", operator);
  }
}

function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return parseInt(num1) + parseInt(num2);
      break;
    case "-":
      return parseInt(num1) - parseInt(num2);
      break;
    case "*":
      return parseInt(num1) * parseInt(num2);
      break;
    case "/":
      return parseInt(num1) / parseInt(num2);
      break;
    default:
      setValueToOutput();
  }
}

equalsKey.addEventListener("click", () => {
  const res = calculate(state[0], state[2], state[1]);
  setValueToOutput();
  setValueToOutput(res);
  state = [res];
});

keys.forEach(key =>
  key.addEventListener("click", e => {
    const value = e.target.innerHTML;
    if (value === "C") {
      setValueToOutput();
      return;
    }
    if (value === "." && output.innerHTML === "") {
      setValueToOutput("0");
    }
    if (value === "+" || value === "-" || value === "/" || value === "*") {
      setOperator(value);
    } else {
      setValueToOutput(value);
      state.push(value);
    }
  })
);

function appendNumber(number) {
  document.getElementById("result").value += number;
}

function appendOperator(operator) {
  document.getElementById("result").value += operator;
}

function appendDecimal() {
  document.getElementById("result").value += ".";
}

function calculate() {
  var result = eval(document.getElementById("result").value);
  document.getElementById("result").value = result;
}

function clearResult() {
  document.getElementById("result").value = "";
}

function backspace() {
  var result = document.getElementById("result").value;
  document.getElementById("result").value = result.substring(
    0,
    result.length - 1
  );
}

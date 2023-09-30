let output = document.getElementById('output');
let currentValue = '';

function appendToOutput(value) {
  currentValue += value;
  output.value = currentValue;
}

function clearAll() {
  currentValue = '';
  output.value = '';
}

function deleteLast() {
  currentValue = currentValue.slice(0, -1);
  output.value = currentValue;
}

function calculate() {
  try {
    currentValue = eval(currentValue);
    output.value = currentValue;
  } catch (error) {
    output.value = 'Error';
  }
}

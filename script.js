function getInputs() {
  const input1 = document.getElementById('num1').value.trim();
  const input2 = document.getElementById('num2').value.trim();
  const resultDisplay = document.getElementById('resultDisplay');
  const errorDisplay = document.getElementById('errorMessage');

  errorDisplay.textContent = '';

  if (input1 === '' || input2 === '') {
    errorDisplay.textContent = 'Please enter both numbers.';
    resultDisplay.textContent = '0';
    return null;
  }

  const num1 = Number(input1);
  const num2 = Number(input2);

  if (num1 < 0 || num2 < 0) {
    errorDisplay.textContent = 'Only positive numbers are allowed!';
    resultDisplay.textContent = '0';
    return null;
  }

  return { num1, num2, resultDisplay };
}

// Addition Event
document.getElementById('addBtn').addEventListener('click', function() {
  const data = getInputs();
  if (data) {
    data.resultDisplay.textContent = data.num1 + data.num2;
  }
});

// Subtraction Event
document.getElementById('subBtn').addEventListener('click', function() {
  const data = getInputs();
  if (data) {
    data.resultDisplay.textContent = data.num1 - data.num2;
  }
});

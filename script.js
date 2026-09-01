document.getElementById('addBtn').addEventListener('click', function() {
  const input1 = document.getElementById('num1').value.trim();
  const input2 = document.getElementById('num2').value.trim();
  const resultDisplay = document.getElementById('resultDisplay');
  const errorDisplay = document.getElementById('errorMessage');

  // Reset messages
  errorDisplay.textContent = '';

  // 1. Check for empty inputs
  if (input1 === '' || input2 === '') {
    errorDisplay.textContent = 'Please enter both numbers.';
    resultDisplay.textContent = '0';
    return;
  }

  const num1 = Number(input1);
  const num2 = Number(input2);

  // 2. Perform addition
  const sum = num1 + num2;
  resultDisplay.textContent = sum;
});
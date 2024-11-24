// Variable to store the current input
let currentInput = '';

// Append value to the display
function appendValue(value) {
    currentInput += value;
    document.getElementById('display').textContent = currentInput;
}

// Clear the display
function clearDisplay() {
    currentInput = '';
    document.getElementById('display').textContent = '0';
}

// Delete the last character
function backspace() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById('display').textContent = currentInput || '0';
}

// Perform the calculation
function calculate() {
    try {
        const result = eval(currentInput.replace('×', '*').replace('÷', '/'));
        document.getElementById('display').textContent = result;
        currentInput = result.toString();
    } catch {
        document.getElementById('display').textContent = 'Error';
        currentInput = '';
    }
}

let currentInput = '';
const display = document.getElementById('display');

function appendSymbol(symbol) {
    if (currentInput === '0' && !isNaN(symbol)) {
        currentInput = ''; // Reset if current input is just '0'
    }
    currentInput += symbol;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function calculateResult() {
    try {
        // Prevent calculation if it ends with an operator
        if (/[+\-*/]$/.test(currentInput)) {
            currentInput = currentInput.slice(0, -1);
        }
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch {
        currentInput = 'Error';
        updateDisplay();
        setTimeout(clearDisplay, 1500); // Clear after 1.5 seconds
    }
}

function updateDisplay() {
    display.textContent = currentInput || '0';
}

// Function to append value to the input field
function appendValue(value) {
    document.Calculator.tex.value += value;
}

// Function to clear the input field
function clearValue() {
    document.Calculator.tex.value = '';
}

// Function to calculate the expression
function calculate() {
    try {
        document.Calculator.tex.value = eval(document.Calculator.tex.value);
    } catch (error) {
        document.Calculator.tex.value = 'Error'; // Handle invalid expressions
    }
}

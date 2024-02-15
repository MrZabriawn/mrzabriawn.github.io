function createCalculator() {
    // Creating calculator elements dynamically
    const calculatorDiv = document.getElementById('calculator');

    // Input fields for numbers
    const input1 = document.createElement('input');
    input1.type = 'number';
    const input2 = document.createElement('input');
    input2.type = 'number';

    // Buttons for operations
    const addButton = document.createElement('button');
    addButton.textContent = '+';
    addButton.onclick = () => calculateAndDisplayResult('add');
    const subtractButton = document.createElement('button');
    subtractButton.textContent = '-';
    subtractButton.onclick = () => calculateAndDisplayResult('subtract');

    // Result display
    const resultDisplay = document.createElement('div');
    resultDisplay.id = 'result';

    // Appending elements to calculatorDiv
    calculatorDiv.appendChild(input1);
    calculatorDiv.appendChild(input2);
    calculatorDiv.appendChild(addButton);
    calculatorDiv.appendChild(subtractButton);
    calculatorDiv.appendChild(resultDisplay);

    // Calculator operations
    function calculateAndDisplayResult(operation) {
        const num1 = parseFloat(input1.value);
        const num2 = parseFloat(input2.value);
        let result;
        if (operation === 'add') {
            result = num1 + num2;
        } else if (operation === 'subtract') {
            result = num1 - num2;
        }
        resultDisplay.textContent = 'Result: ' + result;
    }
}

createCalculator();

let displayValue = "";
let historyValue = "";
let operatorValue = "";
let firstNum = "";
let secondNum = "";

historyDisplay = document.querySelector(".history-display");
mainDisplay = document.querySelector(".main-display");

buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => button.addEventListener("click", handleButtons));

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function backspace() { }

function clear() { }

function operate(operator, num1, num2) {
    let result = undefined;
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
    return result;
}

function handleButtons() {
    switch (true) {
        case this.classList.contains("num-btn"):
            displayValue += this.value;
            break;
        case this.classList.contains("operator-btn"):
            if (!operatorValue) {
                firstNum = +displayValue;
                historyValue = `${displayValue} ${this.value}`;
                displayValue = "";
                operatorValue = this.value;
            } else {
                secondNum = +displayValue;
                const result = operate(operatorValue, firstNum, secondNum);
                
                firstNum = result;
                historyValue = `${result} ${this.value}`;
                displayValue = "";
                operatorValue = this.value; 
            }
            break;
        case this.classList.contains("backspace"):
            displayValue = displayValue.slice(0, displayValue.length - 1);
            break;
        case this.classList.contains("clear"):
            displayValue = "";
            historyValue = "";
            operatorValue = "";
            firstNum = "";
            secondNum = "";
        case this.classList.contains("plus-minus-btn"):
            displayValue = String(+displayValue * -1);
            break;
        case this.classList.contains("equals"):
            break;
    }
    updateDisplay(displayValue, historyValue);
}

function updateDisplay(displayValue, historyValue) {
    mainDisplay.textContent = displayValue;
    historyDisplay.textContent = historyValue;
}
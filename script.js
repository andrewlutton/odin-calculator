let displayValue = "";
let historyValue = "";
let operatorValue = "";

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

function backspace(){}

function clear(){}

function operate(operator, num1, num2) {
    let result = undefined;
    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = add(num1, num2);
            break;
        case "*":
            result = add(num1, num2);
            break;
        case "/":
            result = add(num1, num2);
            break;
        default:
            break;
    }
    return result;
}

function handleButtons() {
    switch (true) {
        case this.classList.contains("num-btn"):
            displayValue += this.value;
            updateDisplay(displayValue);
            break;
        case this.classList.contains("operator-btn"):
            historyValue = `${displayValue} ${this.value}`;
            displayValue = "";
            updateDisplay(displayValue, historyValue);
            break;
        case this.classList.contains("display-btn"):
            break;
        case this.classList.contains("plus-minus-btn"):
            break;
        default:
            console.log("Not num-btn");
            break;
    }
}

function updateDisplay(main=displayValue, history=historyValue) {
    mainDisplay.textContent = main;
    historyDisplay.textContent = history;
}
let displayValue = "";
let historyValue = "";

historyDisplay = document.querySelector(".history-display");
mainDisplay = document.querySelector(".main-display");

buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => button.addEventListener("click", displayHandler));

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
        case "add":
            result = add(num1, num2);
            break;
        case "subtract":
            result = add(num1, num2);
            break;
        case "multiply":
            result = add(num1, num2);
            break;
        case "divide":
            result = add(num1, num2);
            break;
        default:
            break;
    }
    return result;
}

function displayHandler() {
    switch (true) {
        case this.classList.contains("num-btn"):
            displayValue += this.value;
            mainDisplay.textContent = displayValue;
            break;
        case this.classList.contains("operator-btn"):
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
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
// Create an object to keep track of values
const Calculator = {
    // This will display 0 on the calculator screen
    display_value: '0',
    // This will hold the first operand for any expressions, we set it to null for now
    first_operand: null,
    // This checks whether or not the second operand has been inputted by the user
    wait_second_operand: false,
    // This will hold the operator, we set it to null for now
    operator: null,
};

// This modifies values each time a button is clicked on
function input_digit(digit) {
    const { display_value, wait_second_operand } = Calculator;
    // This checks if wait_second_operand is true and sets display_value
    // to the key that was clicked on
    if (wait_second_operand === true) {
        Calculator.display_value = digit;
        Calculator.wait_second_operand = false;
    }
    else {
        // This overwrites display_value if the current value is 0
        // otherwise it adds onto it
        Calculator.display_value = display_value === '0' ? digit : display_value + digit;
    }
}

function input_decimal(dot) {
    // This ensures the accidental clicking of the decial point doesn't
    // cause bugs in the operation
    if (Calculator.wait_second_operand === true) return;
    if (!Calculator.display_value.includes(dot)) {
        // We are saying that if display_value does not contain a decimal point,
        // we want to add one
        Calculator.display_value += dot;
    }
}

// This section handles operators
function handle_operator(next_operator) {
    const { first_operand, display_value, operator } = Calculator;
    // When an operator key is pressed we convert the current number
    // displayed on the screen to a number and then store the result in
    // Calculator.first_operand if it doesn't already exist
    const value_of_input = parseFloat(display_value);
    // Checks if an operator already exists and if wait_second_operand is true,
    // then updates the operator and exits from the function
    if (operator && Calculator.wait_second_operand) {
        Calculator.operator = next_operator;
        return;
    }
    if (first_operand == null) {
        Calculator.first_operand = value_of_input;
    }
    // Checks if an operator already exists
    else if (operator) {
        const value_now = first_operand || 0;
        // If operator exists, property lookup is performed for the operator
        // in the Perform_Calculation object and the function that matches the
        // operator is executed
        let result = Perform_Calculation[operator](value_now, value_of_input);
        // Here we add a fixed amount of numbers after the decimal
        result = Number(result).toFixed(9);
        // This will remove any trailing 0's
        result = (result * 1).toString();
        Calculator.display_value = parseFloat(result);
        Calculator.first_operand = parseFloat(result);
    }
    Calculator.wait_second_operand = true;
    Calculator.operator = next_operator;
}

const Perform_Calculation = {
    '/': (first_operand, second_operand) => first_operand / second_operand,
    '*': (first_operand, second_operand) => first_operand * second_operand,
    '+': (first_operand, second_operand) => first_operand + second_operand,
    '-': (first_operand, second_operand) => first_operand - second_operand,
    '=': (first_operand, second_operand) => second_operand,
};

function calculator_reset() {
    Calculator.display_value = '0';
    Calculator.first_operand = null;
    Calculator.wait_second_operand = false;
    Calculator.operator = null;
}

// This function updates the calculator screen with the contents of Calculator.display_value
function update_display() {
    // Makes use of the calculator-screen class to target the
    // input tag in the HTML document
    const display = document.querySelector(".calculator-screen");
    display.value = Calculator.display_value;
}

update_display();
// This section monitors button clicks
const keys = document.querySelector(".calculator-keys");
keys.addEventListener('click', (event) => {
    // The target variable is an object that represents the element
    // that was clicked
    const { target } = event;
    // If the element that was clicked on is not a button, exit the function
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        handle_operator(target.value);
        update_display();
        return;
    }
    if (target.classList.contains('decimal')) {
        input_decimal(target.value);
        update_display();
        return;
    }
    // Ensures that AC clears all inputs from the Calculator screen
    if (target.classList.contains('all-clear')) {
        calculator_reset();
        update_display();
        return;
    }
    input_digit(target.value);
    update_display();
})
// mathleviadams.js

// Function to perform the selected operation
function calculate(operation, num1, num2) {
    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            return num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
        case 'exponent':
            return Math.pow(num1, num2);
        default:
            return 'Error: Unsupported operation';
    }
}

// Capture the command-line arguments
const args = process.argv.slice(2); // Get arguments passed after the filename

// Ensure the correct number of arguments are provided
if (args.length !== 3) {
    console.log('Usage: node mathleviadams.js <operation> <num1> <num2>');
    process.exit(1);
}

const operation = args[0]; // The operation: add, subtract, multiply, divide, exponent
const num1 = parseFloat(args[1]); // First number
const num2 = parseFloat(args[2]); // Second number

// Ensure both arguments are valid numbers
if (isNaN(num1) || isNaN(num2)) {
    console.log('Error: Please provide two valid numbers.');
    process.exit(1);
}

// Perform the calculation and display the result
const result = calculate(operation, num1, num2);
console.log(`The result of ${operation} ${num1} and ${num2} is: ${result}`);
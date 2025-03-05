// Prompt the user to enter a number
const number_1 = prompt('Enter the first number: ');
var result = 0;

// Convert the input to a number
let number = Number(number_1);

// Check if the input is a valid number
if (isNaN(number)) {
    result = 'Error';
} else {
    if (number > 0) {
        result = 1;
    } else if (number < 0) {
        result = -1;
    } else {
        result = 0;
    }
}

// Display the result in an alert dialog
alert('The result is: ' + result);

// Log the result to the console
console.log('The result is: ' + result);
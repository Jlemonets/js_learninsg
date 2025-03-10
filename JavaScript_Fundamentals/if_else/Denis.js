const number = prompt('Enter the first number: ');
var result = 0;

// Convert the input to a number
let numar = Number(number);

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
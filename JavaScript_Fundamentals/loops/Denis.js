let startNumber = Number(prompt("Enter first number:"));
let endNumber = Number(prompt("Enter second number:"));

if (isNaN(startNumber) || isNaN(endNumber)) {
    alert("Please enter valid numbers!");
} else {
    let sumFor = 0;
    for (let number = startNumber; number <= endNumber; number++) {
        if (number % 2 === 0) {
            sumFor = sumFor + number;
        }
    }
    console.log("Sum using FOR loop: " + sumFor);

    let sumWhile = 0;
    let currentNumber = startNumber;
    while (currentNumber <= endNumber) {
        if (currentNumber % 2 === 0) {
            sumWhile = sumWhile + currentNumber;
        }
        currentNumber = currentNumber + 1;
    }
    console.log("Sum using WHILE loop: " + sumWhile);

    let sumDoWhile = 0;
    let num = startNumber;
    do {
        if (num % 2 === 0) {
            sumDoWhile = sumDoWhile + num;
        }
        num = num + 1;
    } while (num <= endNumber);
    console.log("Sum using DO-WHILE loop: " + sumDoWhile);
}

const n = 10;
const numbers = Array.from({ length: n }, (_, i) => i + 1);


console.log('Using for loop:');
for (let i = 0; i < numbers.length; i++) {
    console.log(`${i}: ${numbers[i]}`);
}


console.log('Using forEach:');
numbers.forEach((number,index) => {
    console.log(`${index}: ${number}`);
});


console.log('Using map:');
numbers.map((number,index) => {
    console.log(`${index}: ${number}`);
});


console.log('Using for...of:');
for (const [i ,number] of numbers.entries()) {
    console.log(`${i}: ${number}`);
}


console.log('Using array_walk:');
numbers.forEach((number, index ) => {
    console.log(`${index }: ${number}`);
});


console.log('Using while loop:');
let i = 0;
while (i < numbers.length) {
    console.log(`${i}: ${numbers[i]}`);
    i++;
}

// I think the best way to iterate over an array is using the for loop because it is the most efficient way to iterate over an array.
// It is also the most common way to iterate over an array. 
// The for loop is also the most flexible way to iterate over an array because you can easily control the iteration process by using the loop control variables.
// The for loop is also the most readable way to iterate over an array because it is the most common way to iterate over an array.
// The for loop is also the most efficient way to iterate over an array because it is the most common way to iterate over an array.

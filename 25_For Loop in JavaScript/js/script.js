// For Loop in JavaScript

/*
The for loop executes a block of code a specified number of times.
Syntax: for(initialization; condition; increment/decrement) { code }
*/

// Example 1: Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i); // Output numbers from 1 to 10
}

// Example 2: Store numbers from 0 to 100 in an array
let arr = [];
for (let i = 0; i <= 100; i++) {
    arr.push(i); // Adds numbers 0 to 100 into the array
}
console.log(arr); // Output the array

// Example 3: Store even numbers from 0 to 100 in an array
let arr1 = [];
for (let j = 0; j <= 100; j += 2) {
    arr1.push(j); // Adds only even numbers into the array
}
console.log(arr1); // Output the array with even numbers

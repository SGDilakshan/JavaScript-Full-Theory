// While Loop in JavaScript

/*
The while loop executes a block of code as long as a specified condition is true.
It is useful when the number of iterations is not known beforehand.

Syntax:
while (condition) {
    // Code to be executed
}
*/

// Example: Printing numbers from 1 to 10 using a while loop
let i = 1; // Initialize counter
while (i <= 10) { // Loop continues while i is less than or equal to 10
    console.log(i); // Print the current value of i
    i++; // Increment i to avoid infinite loop
}
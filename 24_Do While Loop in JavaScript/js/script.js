// Do While Loop in JavaScript

/*
The `do...while` loop executes the block of code at least once,
and then continues execution as long as the specified condition is `true`.
*/

// Initializing variables
let table = 2;  // The number for which the multiplication table is generated
let limit = 5;  // The limit up to which the table is printed
let i = 1;      // Counter variable

// Using do-while loop
do {
    // Printing the multiplication table of the given number
    console.log(table + " X " + i + " = " + (table * i));
    i++; // Incrementing the counter
} while (i <= limit); // Condition to continue looping


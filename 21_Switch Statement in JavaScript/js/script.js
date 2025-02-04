// Switch Statement in JavaScript

/*
The switch statement is used to perform different actions based on different conditions.
It is an alternative to using multiple if-else statements.

Syntax:
switch(expression) {
    case value1:
        // Code to execute if expression === value1
        break;
    case value2:
        // Code to execute if expression === value2
        break;
    default:
        // Code to execute if none of the cases match
        break;
}
*/

// Example: Number to Word Conversion
let num = parseInt(prompt("Enter a Number: "));

switch(num) {
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    default:
        console.log("Invalid Input"); // Executes if no matching case is found
        break;
}

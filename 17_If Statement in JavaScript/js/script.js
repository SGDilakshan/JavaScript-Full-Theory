// If Statement in JavaScript

/*
Syntax:
if (condition) {
    // Code executes if the condition is true
}
*/

// Prompt user to enter their age
let age = prompt("Enter your age: ");

// Check if age is not null and is 18 or above
if (age != null && age >= 18) {
    console.log("You are eligible to vote...");
} else {
    console.log("You are not eligible to vote.");
}

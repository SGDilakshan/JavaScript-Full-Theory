// If-Else Statement in JavaScript

/*
Syntax:
if (condition) {
    // Code executes if the condition is true
} else {
    // Code executes if the condition is false
}
*/

// Prompt user to enter their age
let age = prompt("Enter your age: ");

// Check if age is not null and is 18 or above
if (age != null && age >= 18) {
    console.log("You are Eligible to vote...");
} else {
    console.log("You are Not Eligible to vote...");
}

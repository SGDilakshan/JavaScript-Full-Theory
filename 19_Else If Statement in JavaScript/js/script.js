// Else If Statement in JavaScript

/*
Syntax:
if (condition) {
    // Code executes if the condition is true
} else if (condition) {
    // Code executes if this condition is true
} else {
    // Code executes if none of the above conditions are true
}
*/

// Example 1: Checking if a number is positive, negative, or zero
let number = prompt("Enter your number:");
if (number < 0) {
    console.log(number, "is a negative number");
} else if (number > 0) {
    console.log(number, "is a positive number");
} else {
    console.log("Given number is zero");
}

// Example 2: Assigning grades based on the average score
/*
Grading Criteria:
90-100 -> A Grade
80-89  -> B Grade
70-79  -> C Grade
Below 70 -> D Grade
*/

let avg = prompt("Enter your average score:");
if (avg >= 90 && avg <= 100) {
    console.log("Your Grade is A");
} else if (avg >= 80 && avg <= 89) {
    console.log("Your Grade is B");
} else if (avg >= 70 && avg <= 79) {
    console.log("Your Grade is C");
} else {
    console.log("Your Grade is D");
}

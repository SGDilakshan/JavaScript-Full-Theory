// Conditional or Ternary Operator in JavaScript

// Example 1: Simple ternary operation
const age = 15;
const result = age >= 18 ? "Eligible" : "Not Eligible"; // Checks if age is 18 or above
console.log(result); // Output: Not Eligible

// Example 2: Handling null or undefined values in a function
function welcome(name) {
    // If name is provided, use it; otherwise, use "No Name"
    const result1 = name ? name : "No Name";
    console.log("Welcome ", result1);
}

welcome(); // Output: Welcome No Name (no argument passed)
welcome(null); // Output: Welcome No Name (null passed)
welcome("Dilakshan"); // Output: Welcome Dilakshan

// Example 3: Object usage in JavaScript
const user = { "name": "Dilakshan", "age": 25 };
console.log(user); // Output: { name: 'Dilakshan', age: 25 }
console.log(user.name); // Output: Dilakshan
console.log(user.age); // Output: 25

// Example 4: Using ternary operator with an object property
const greeting = (user) => {
    // If user.name exists, use it; otherwise, use "No Name"
    const name1 = user.name ? user.name : "No Name";
    return "Hello " + name1;
};

console.log(greeting(user)); // Output: Hello Dilakshan

// Example 5: Conditional chains using ternary operator
/*
    Grade Conditions:
    avg >= 90 -> A Grade
    avg >= 80 -> B Grade
    Else -> C Grade
*/
const avg = 92;
const grade = avg >= 90 ? "A Grade" : avg >= 80 ? "B Grade" : "C Grade";
console.log("Grade: ", grade); // Output: Grade: A Grade

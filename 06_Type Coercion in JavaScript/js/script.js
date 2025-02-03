// Type Coercion in JavaScript

let a = "25";  // 'a' is a string
let b = 10;    // 'b' is a number

// Implicit Type Coercion (JavaScript converts number to string)
console.log(a + b);  // Outputs: "2510" (string concatenation)

// Explicit Type Conversion (Manually converting string to number)
a = Number(a);  // Converts 'a' from string to number
console.log(a + b);  // Outputs: 35 (number addition)

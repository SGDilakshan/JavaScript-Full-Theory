// Arithmetic Operations in JavaScript

let a = 100;
let b = 20;
let c;

// Basic Arithmetic Operations
c = a + b;  // Addition
console.log("Addition:", c);

c = a - b;  // Subtraction
console.log("Subtraction:", c);

c = a * b;  // Multiplication
console.log("Multiplication:", c);

c = a / b;  // Division
console.log("Division:", c);

c = a % b;  // Modulus (Remainder)
console.log("Modulus:", c);

c = 2 ** 3;  // Exponentiation (2 raised to the power of 3)
console.log("Exponentiation:", c);

// Increment and Decrement
c = ++a;  // Pre-increment (Increases 'a' by 1 before assignment)
console.log("Pre-increment:", c);

c = a++;  // Post-increment (Assigns value first, then increases by 1)
console.log("Post-increment:", c);
console.log("Value of a after post-increment:", a);  // Shows updated value of 'a'

c = --b;  // Pre-decrement (Decreases 'b' by 1 before assignment)
console.log("Pre-decrement:", c);

c = b--;  // Post-decrement (Assigns value first, then decreases by 1)
console.log("Post-decrement:", c);
console.log("Value of b after post-decrement:", b);  // Shows updated value of 'b'

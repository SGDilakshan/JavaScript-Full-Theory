// Math Functions in JavaScript

let c; // Declare a variable to store mathematical results

// Constants
c = Math.PI; // Returns the value of Pi (3.141592653589793)
c = Math.E; // Returns the value of Euler's number (2.718281828459045)

// Rounding Functions
c = Math.round(5.8); // Rounds 5.8 to the nearest integer (6)
c = Math.round(5.3); // Rounds 5.3 to the nearest integer (5)
c = Math.floor(5.3); // Rounds 5.3 down to the nearest integer (5)
c = Math.ceil(5.3); // Rounds 5.3 up to the nearest integer (6)

// Square Root & Absolute Value
c = Math.sqrt(90); // Returns the square root of 90
c = Math.abs(-85); // Returns the absolute value of -85 (85)

// Truncation & Power
c = Math.trunc(2.58); // Removes the decimal part, returns 2
c = Math.pow(2, 4); // Calculates 2 raised to the power of 4 (16)

// Min & Max Functions
c = Math.min(10, 20, 30, 50, 48, 98); // Returns the smallest number (10)
c = Math.max(10, 20, 30, 50, 48, 98); // Returns the largest number (98)

// Random Number Generation
c = Math.random(); // Returns a random number between 0 and 1
c = Math.floor(Math.random() * 5 + 1); // Returns a random integer between 1 and 5

// Sign Function
c = Math.sign(-25); // Returns -1 (negative number)
c = Math.sign(25); // Returns 1 (positive number)
c = Math.sign(0); // Returns 0 (zero)

// Trigonometric Functions
c = Math.sin(45); // Returns the sine of 45 degrees
c = Math.cos(45); // Returns the cosine of 45 degrees

// Logarithmic Functions
c = Math.log2(45); // Returns the base-2 logarithm of 45
c = Math.log(45); // Returns the natural logarithm (base e) of 45
c = Math.log10(45); // Returns the base-10 logarithm of 45

console.log(c); // Print the last computed value

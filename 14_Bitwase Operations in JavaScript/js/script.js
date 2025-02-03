// Bitwise Operations in JavaScript

// Bitwise AND (&) - Compares bits of two numbers and returns 1 only if both bits are 1.
let a = 2; // Binary: 10
let b = 3; // Binary: 11
console.log(a & b); // Output: 2 (Binary: 10)

// Bitwise OR (|) - Compares bits of two numbers and returns 1 if at least one of the bits is 1.
console.log(a | b); // Output: 3 (Binary: 11)

// Bitwise NOT (~) - Inverts all bits. For positive numbers, it converts to negative.
console.log(~a); // Output: -3 (Binary: -11)
console.log(~b); // Output: -4 (Binary: -100)

// Bitwise XOR (^) - Compares bits of two numbers and returns 1 if the bits are different.
console.log(a ^ b); // Output: 1 (Binary: 01)

// Left Shift (<<) - Shifts the bits to the left by the specified number of positions, effectively multiplying the number.
console.log(a << b); // Output: 16 (Binary: 10000)

// Right Shift (>>) - Shifts the bits to the right by the specified number of positions, dividing the number.
console.log(a >> b);  // Output: 0 (Binary: 0)

// Unsigned Right Shift (>>>) - Same as right shift but ensures the result is always positive.
console.log(a >>> b); // Output: 0 (Binary: 0)

// Compound Bitwise AND (&=) - Performs a bitwise AND operation and assigns the result to the variable.
let c = 12; // Binary: 1100
let d = 24; // Binary: 11000
console.log(c & d); // Output: 8 (Binary: 1000)

// Performing compound assignment for Bitwise AND
c &= d; // c = c & d
console.log(c); // Output: 8 (Binary: 1000)

// Explanation of Bitwise NOT (~) operation
// ~a = -a - 1
// For example, ~2 => -(2) - 1 = -3

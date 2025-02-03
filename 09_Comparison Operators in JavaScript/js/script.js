// Comparison Operators in JavaScript

// Declare two variables a and b
let a = 10;
let b = 20;

// Check if a is equal to b (only compares values)
console.log(a == b);  // false, because 10 is not equal to 20

// Declare two variables a1 and b1
let a1 = 10;
let b1 = 10;

// Check if a1 is equal to b1 (only compares values)
console.log(a1 == b1);  // true, because both values are equal

// Declare two variables a2 and b2
let a2 = 10;
let b2 = '10';

// Check if a2 is equal to b2 (compares values, but not data types)
console.log(a2 == b2);  // true, because the values are equal (type coercion happens)

// Check if a2 is strictly equal to b2 (compares both values and data types)
console.log(a2 === b2);  // false, because a2 is a number and b2 is a string

// Check if a2 is not equal to b2 (compares values)
console.log(a2 != b2);  // false, because values are equal after type coercion

// Check if a2 is strictly not equal to b2 (compares both values and data types)
console.log(a2 !== b2);  // true, because values are the same but types are different

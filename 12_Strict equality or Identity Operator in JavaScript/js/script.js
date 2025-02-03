// Strict Equality (===) vs. Loose Equality (==) in JavaScript

// Loose equality (==) performs type coercion, meaning it converts values to a common type before comparing.
// Strict equality (===) does not perform type conversion and checks both value and type.

// Example 1: Number vs. String comparison
let a = 10;
let b = '10';
console.log(a == b);  // true  (values are the same after type conversion)
console.log(a === b); // false (values are the same, but types are different)

// Example 2: Boolean vs. Number comparison
let a1 = 0;
let b1 = false;
console.log(a1 == b1);  // true  (0 and false are considered equal in loose comparison)
console.log(a1 === b1); // false (0 is a number, false is a boolean)

// Example 3: Empty String vs. Boolean comparison
let a2 = '';
let b2 = false;
console.log(a2 == b2);  // true  (empty string and false are considered equal)
console.log(a2 === b2); // false (empty string is a string, false is a boolean)

// Example 4: Undefined vs. Boolean comparison
let a3;
let b3 = false;
console.log(a3 == b3);  // false (undefined is only loosely equal to null)
console.log(b3 === b3); // true  (comparing the same boolean value)

// Example 5: Empty String vs. Number comparison
let a4 = '';
let b4 = 0;
console.log(a4 == b4);  // true  (empty string converts to 0)
console.log(a4 === b4); // false (string vs. number)

// Example 6: Object vs. String comparison
let a5 = new String("Dilakshan");
let b5 = "Dilakshan";
console.log(a5 == b5);  // true  (object is converted to a string)
console.log(a5 === b5); // false (object vs. primitive string)

// Example 7: Null vs. Undefined comparison
let a6 = null;
let b6 = undefined;
console.log(a6 == b6);  // true  (null and undefined are loosely equal)
console.log(a6 === b6); // false (null and undefined are different types)

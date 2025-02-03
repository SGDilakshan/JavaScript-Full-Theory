// Logical Operators in JavaScript

/*
&&  - logical AND: Returns true if both conditions are true
||  - logical OR: Returns true if at least one condition is true
!   - logical NOT: Inverts the boolean value (true becomes false and vice versa)
*/

// Example 1: AND (&&) - Returns true if the mark is between 35 and 100
let mark = 45;
console.log(mark >= 35 && mark <= 100);  // true

// Example 2: OR (||) - Returns true if the value of 'a' is either 2 or 5
let a = 10;
console.log(a == 2 || a == 5);  // false

// Example 3: NOT (!) - Inverts the boolean value of 'a' (true becomes false)
a = true;
console.log(!a);  // false

// Increment or Decrement in JavaScript

// Postfix Increment: a++ means a is incremented after its value is used.
let a = 1;
a++; // a = a + 1;
console.log(a); // Output: 2

// Postfix Decrement: b-- means b is decremented after its value is used.
let b = 5;
b--; 
console.log(b); // Output: 4

// Explanation of Increment and Decrement Types:
// Postfix Increment (a++): Increases the value of 'a' after it has been used.
// Prefix Increment (++a): Increases the value of 'a' before it is used.
// Postfix Decrement (a--): Decreases the value of 'a' after it has been used.
// Prefix Decrement (--a): Decreases the value of 'a' before it is used.

// Postfix Increment Example
let x = 3;
const y = x++; // y is assigned 3, then x is incremented to 4
console.log("x:", x, "y:", y); // Output: x: 4 y: 3

// Prefix Increment Example
let i = 3;
const j = ++i; // i is incremented to 4, then j is assigned 4
console.log("i:", i, "j:", j); // Output: i: 4 j: 4

// Postfix Decrement Example
let m = 6;
const n = m--; // n is assigned 6, then m is decremented to 5
console.log("m:", m, "n:", n); // Output: m: 5 n: 6

// Prefix Decrement Example
let p = 6;
const q = --p; // p is decremented to 5, then q is assigned 5
console.log("p:", p, "q:", q); // Output: p: 5 q: 5

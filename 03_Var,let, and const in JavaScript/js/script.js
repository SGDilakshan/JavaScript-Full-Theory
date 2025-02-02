/* 
1. Redeclaration
var allows redeclaration within the same scope.
let does not allow redeclaration within the same scope.
const does not allow redeclaration within the same scope.
*/

// var allows redeclaration
var a = 10;
var a = 20;  // No error
console.log(a);  // Outputs 20

// let does not allow redeclaration
let b = 10;
// let b = 20;  // This will throw an error: Identifier 'b' has already been declared
console.log(b);

// const does not allow redeclaration
const c = 10;
// const c = 20;  // This will throw an error: Identifier 'c' has already been declared
console.log(c);


/* 
2. Reassignment
var allows reassignment.
let allows reassignment.
const does not allow reassignment.
*/

// var allows reassignment
var x = 10;
x = 20;  // No error
console.log(x);  // Outputs 20

// let allows reassignment
let y = 30;
y = 40;  // No error
console.log(y);  // Outputs 40

// const does not allow reassignment
const z = 50;
// z = 60;  // This will throw an error: Assignment to constant variable.
console.log(z);


/* 
3. Scope
var has function scope or global scope.
let and const have block scope (only accessible inside the block where they are declared).
*/

// var has function or global scope
if (true) {
    var m = "Hello from var!";
}
console.log(m);  // Outputs "Hello from var!" even outside the block

// let has block scope
if (true) {
    let n = "Hello from let!";
}
// console.log(n);  // This will throw an error: n is not defined outside the block

// const has block scope
if (true) {
    const p = "Hello from const!";
}
// console.log(p);  // This will throw an error: p is not defined outside the block

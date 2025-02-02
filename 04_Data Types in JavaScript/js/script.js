/*
Data Types in JavaScript

1. **Primitive Data Types** (Simple types)
    - **String**: Text, like "Hello"
    - **Number**: Decimal or whole numbers, e.g., 1.25 or 25
    - **Boolean**: True or false
    - **Null**: Represents no value
    - **Undefined**: A variable that is declared but not assigned a value
    - **Symbol** (ES6): Unique identifiers for objects

2. **Reference Data Types** (Complex types)
    - **Arrays**: List of values
    - **Objects**: Key-value pairs
    - **Date**: Used for date and time
    - **Functions**: Blocks of code that can be reused
*/



// Example of Primitive Data Types
var a = 25;  // Integer
console.log(typeof a);  // Outputs: number

var a = 25.5;  // Decimal number
console.log(typeof a);  // Outputs: number

// String (Text)
var fname = "dilakshan";  
console.log(fname);  // Outputs: dilakshan
console.log(typeof fname);  // Outputs: string

// Boolean (True/False)
var isMarried = true;
console.log(isMarried);  // Outputs: true
console.log(typeof isMarried);  // Outputs: boolean

// Null (Empty value)
var phone = null;
console.log(phone);  // Outputs: null
console.log(typeof phone);  // Outputs: object (quirk in JavaScript)

// Undefined (Variable declared but not assigned)
let b;
console.log(typeof b);  // Outputs: undefined

// Symbol (ES6 feature for unique values)
const s1 = Symbol();
console.log(s1);  // Outputs: Symbol()
const s2 = Symbol();
console.log(s2);  // Outputs: Symbol()

console.log(s1 == s2);  // Outputs: false (Symbols are unique even if they have the same description)


// Example of Reference Data Types
// Arrays (List of values)
var courses = ['c', 'c++', 'java'];
console.log(courses);  // Outputs: ['c', 'c++', 'java']
console.log(typeof courses);  // Outputs: object (Arrays are objects in JavaScript)

// Objects (Key-value pairs)
var student = {
    'fname': "dilakshan",
    'age': 25
};
console.log(student);  // Outputs: { fname: "dilakshan", age: 25 }
console.log(typeof student);  // Outputs: object

// Date (Date and time object)
var d = new Date();
console.log(d);  // Outputs: Current date and time
console.log(typeof d);  // Outputs: object


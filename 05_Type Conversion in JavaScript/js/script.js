// Type Conversion in JavaScript

// Number to String Conversion
let a;

a = 25;
console.log(a, typeof a);  // Number
a = String(a);  
console.log(a, typeof a);  // Converted to String

a = 25.5;
console.log(a, typeof a);  // Number
a = String(a);  
console.log(a, typeof a);  // Converted to String

a = true;
console.log(a, typeof a);  // Boolean
a = String(a);
console.log(a, typeof a);  // Converted to String

a = new Date();
console.log(a, typeof a);  // Object (Date)
a = String(a);
console.log(a, typeof a);  // Converted to String

a = [1, 2, 3, 4, 5];
console.log(a, typeof a);  // Array (Object)
a = String(a);
console.log(a, typeof a);  // Converted to String (Comma-separated)

// Using toString() Method
a = 25;
console.log(a, typeof a);  // Number
a = a.toString();
console.log(a, typeof a);  // Converted to String

console.clear();  // Clears console output

// String to Number Conversion
a = '125';
console.log(a, typeof a);  // String
a = Number(a);
console.log(a, typeof a);  // Converted to Number

a = true;
console.log(a, typeof a);  // Boolean
a = Number(a);
console.log(a, typeof a);  // Converted to Number (true → 1)

a = [1, 2, 3, 4, 5];
console.log(a, typeof a);  // Array (Object)
a = Number(a);  
console.log(a, typeof a);  // NaN (Not a Number)

a = 'Dilakshan';
console.log(a, typeof a);  // String
a = Number(a);
console.log(a, typeof a);  // NaN (Not a Number)

// Parsing Integers and Floats
a = '35.55';
console.log(a, typeof a);  // String
a = parseInt(a);
console.log(a, typeof a);  // Converted to Integer (35)

a = '35.55';
console.log(a, typeof a);  // String
a = parseFloat(a);
console.log(a, typeof a);  // Converted to Float (35.55)

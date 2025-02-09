// Array declaration using literal
let a = [10, 20, 30, 40];
console.log(a); // Print array to console
console.table(a); // Display array in table format
console.table(a[1]); // Display second element in table format

// Array declaration using Array constructor
let b = new Array(10, 20, 30, 40);
console.table(b);

// Array with mixed data types
let c = new Array("Dilakshan", 30, true, { m1: 100, m2: 89, m3: 86 });
console.table(c);

/*
Important JavaScript array methods:
- forEach: Iterates over elements
- map: Returns a new array with transformed values
- slice: Extracts a section of an array
- splice: Adds/removes elements in an array
- concat: Merges arrays
- sort: Sorts array elements
- fill: Fills array with static values
- includes: Checks if an element exists
- join: Converts array to string
- reverse: Reverses array order
- push: Adds element to the end
- pop: Removes last element
- shift: Removes first element
- unshift: Adds element to the beginning
- indexOf: Finds first occurrence index
- lastIndexOf: Finds last occurrence index
- every: Checks if all elements satisfy a condition
- some: Checks if any element satisfies a condition
- find: Returns first matching element
- findIndex: Returns index of first matching element
- from: Creates an array from iterable
- isArray: Checks if a variable is an array
- filter: Returns elements that satisfy a condition
- flat: Flattens nested arrays
- reduce: Reduces array to a single value
*/

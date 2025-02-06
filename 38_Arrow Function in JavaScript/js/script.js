// Arrow Function in JavaScript

/*
const functionName = (parameter) => {
    function body    
};
*/

// Defining an arrow function to add two numbers
const add = (a, b) => { return a + b; };
console.log(add); // Logs the function reference
console.log(add(25, 67)); // Calls the function and logs the result

// 1. Arrow function with map() - Doubles each number in the array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
let doubleNumbers = numbers.map(number => number * 2);
console.log(doubleNumbers);

// 2. Arrow function with filter() - Filters words with more than 5 characters
let words = ["apple", "banana", "orange", "grape"];
console.log(words);
let filterWords = words.filter(word => word.length > 5);
console.log(filterWords);

// 3. Arrow function with reduce() - Sums up all numbers in the array
console.log(numbers);
let total = numbers.reduce((sum, number) => sum + number, 0);
console.log(total);

// 4. Arrow function to create a closure - Counter function
let createCounter = () => {
    let count = 0; // Initialize count
    return () => {
        count++; // Increment count
        return count; // Return updated count
    };
};

// Creating a counter instance
let counter = createCounter();
console.log(counter); // Logs the function reference
console.log(counter()); // Increments and logs count (1)
console.log(counter()); // Increments and logs count (2)
console.log(counter()); // Increments and logs count (3)

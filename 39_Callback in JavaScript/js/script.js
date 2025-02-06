// Callback in JavaScript

// Defining a callback function
function myCallback() {
    console.log("I am a callback function");
}

// Higher-order function that takes a callback as an argument
function higherOrderFunction(myCallback) {
    myCallback(); // Executes the callback function
}

// Calling the higher-order function with myCallback
higherOrderFunction(myCallback);

// Using setTimeout to execute a function after a delay
setTimeout(function() {
    console.log("Hello World"); // Logs message after 3 seconds
}, 3000);

// Using setInterval to execute a function repeatedly at intervals
setInterval(function() {
    console.log("Hello World Dilakshan"); // Logs message every 3 seconds
}, 3000);

// Using forEach with a callback function to iterate over an array
const nums = [1, 2, 3];
nums.forEach(function(number) {
    console.log(number); // Logs each number in the array
});

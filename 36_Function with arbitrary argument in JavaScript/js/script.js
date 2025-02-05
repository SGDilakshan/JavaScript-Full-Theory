// Function with arbitrary arguments in JavaScript

// Function with arbitrary arguments using the 'arguments' object
// The 'arguments' object allows us to handle an indefinite number of parameters passed to the function
function sum(){
    let total = 0;  // Initialize the total sum variable
    for(let i = 0; i < arguments.length; i++){  // Loop through all arguments
        total += arguments[i];  // Add each argument to the total sum
    }
    return total;  // Return the total sum
}

console.log(sum(12, 12));  // Output the sum of 12 and 12
console.log(sum(12, 88, 12, 12));  // Output the sum of 12, 88, 12, and 12

// Function with arbitrary arguments using the spread operator (...)
// The spread operator allows the function to handle an indefinite number of arguments as an array
function total(...args){
    let total = 0;  // Initialize the total sum variable
    for(let i = 0; i < args.length; i++){  // Loop through all arguments
        total += args[i];  // Add each argument to the total sum
    }
    return total;  // Return the total sum
}

console.log(total(12, 12));  // Output the sum of 12 and 12
console.log(total(12, 88, 12, 12));  // Output the sum of 12, 88, 12, and 12

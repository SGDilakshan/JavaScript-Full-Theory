// Looping over objects by converting to an array

// Initialize an object 'user' with properties
let user = {
    name : "Dilakshan",  // User's name
    age  : 25,           // User's age
    city : "Jaffna",     // User's city
    contact : "0771234567", // User's contact number
};

// Convert the object's keys into an array using Object.keys()
let arr_keys = Object.keys(user);
console.log(arr_keys);  // Log the array of keys (property names)
console.table(arr_keys);  // Display the array of keys in a table format

// Convert the object's values into an array using Object.values()
let arr_values = Object.values(user);
console.table(arr_values);  // Display the array of values in a table format

// Loop over the keys array to access each property and its value
for (let i = 0; i < arr_keys.length; i++) {
    // Log the key-value pair using the keys and values arrays
    console.log(arr_keys[i] + " : " + arr_values[i]);
    
    // Access the value of the current property using the key and log it
    console.log(user[arr_keys[i]]);
}

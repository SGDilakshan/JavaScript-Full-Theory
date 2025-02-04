// For in Loop in JavaScript

// Initialize an object 'user' with properties
let user = {
    name : "Dilakshan",  // User's name
    age  : 25,           // User's age
    city : "Jaffna",     // User's city
    contact : "0771234567", // User's contact number
};

// For...in loop to iterate over the properties of the object
for (let prop in user) {
    // Log each property name and its corresponding value from the 'user' object
    console.log(prop + " : ", user[prop]);
}


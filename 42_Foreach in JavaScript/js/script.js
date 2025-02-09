// Creating an array of numbers
const number = [1,2,3,4,5,6,7,8,9,10];

// Using forEach to iterate and print each value
number.forEach((value) => {
    console.log(value);
});

// Using forEach to print index and value
number.forEach((value, index) => {
    console.log("Index : " + index + " Value: " + value);
});

// Creating an array of user objects
const users = [
    {full_name: "Ram", age: 12, city: "Jaffna", salary: 10000},
    {full_name: "Sam", age: 15, city: "Chennai", salary: 10500},
    {full_name: "Ravi", age: 22, city: "Srilanka", salary: 12000},
    {full_name: "Dilakshan", age: 18, city: "Hosur", salary: 6000},
    {full_name: "Aureen", age: 47, city: "Japan", salary: 1000056},
    {full_name: "Stanley", age: 10, city: "Salem", salary: 8000},
];

// Using forEach to print the full name of each user
users.forEach((user) => {
    console.log(user.full_name);
});

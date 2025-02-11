// Map in JavaScript

const numbers = [1,2,3,4,5,6,7,8,9,10];
//map(value,index,array)
let sqrt = numbers.map((value)=>{
    return Math.sqrt(value).toFixed(2);
});

console.table(sqrt);

const users = [
    {name: "Ram", age: 12, city: "Jaffna", salary: 10000},
    {name: "Sam", age: 15, city: "Chennai", salary: 10500},
    {name: "Ravi", age: 22, city: "Srilanka", salary: 12000},
    {name: "Dilakshan", age: 18, city: "Hosur", salary: 6000},
    {name: "Aureen", age: 47, city: "Japan", salary: 1000056},
    {name: "Stanley", age: 10, city: "Salem", salary: 8000},
];
console.table(users);

let eligible_status = users.map((user)=>({
    /*
    name: user.name,
    age:user.age,
    city:user.city,
    salary: user.salary,
    */
    ...user,
    status: user.age>=18? "Eligible":"Not Eligible"
}));
console.table(eligible_status);
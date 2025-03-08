// 51_Sort in JavaScript

const names = ["Kumar","Aureen","Dilakshan","Zara","Sivanathan"];
console.log("Before Sort: "+names);
names.sort();
console.log("After Sort: "+names);

const num = [10,100,25,150,45,80,9];
console.log("Before Sort: "+num);
num.sort();
console.log("After Sort: "+num);

num.sort((a,b)=>{
    return a-b;
});
console.log("Asc Compare Sort: "+num);

num.sort((a,b)=>{
    return b-a;
});
console.log("Dsc Compare Sort: "+num);


const users = [
    {name: "Ram", age: 12, city: "Jaffna", salary: 10000},
    {name: "Sam", age: 15, city: "Chennai", salary: 10500},
    {name: "Ravi", age: 22, city: "Srilanka", salary: 12000},
    {name: "Dilakshan", age: 18, city: "Hosur", salary: 6000},
    {name: "Aureen", age: 47, city: "Japan", salary: 1000056},
    {name: "Stanley", age: 10, city: "Salem", salary: 8000},
];
console.table(users);

users.sort((a,b)=>{
    return a.age-b.age;
});
console.table(users);

users.sort((a,b)=>{
    if(a.name>b.name){
        return 1;
    }
    else if (a.name<b.name){
        return -1;
    }
    else{
        return 0;
    }
});
console.table(users);
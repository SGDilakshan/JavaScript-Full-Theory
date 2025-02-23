// Filter in JavaScript

let numbers = [1,2,3,4,5,6,7,8,9,10];
let evenNumbers = numbers.filter(number => number%2==0);
console.log(evenNumbers);

let users =[
    {name:"Dilakshan",age: 25},
    {name:"Sivanathan",age: 40},
    {name:"Shan",age: 35}
];
let eligible = users.filter(user => user.age>30);
console.log(eligible);

let words = ['cat','dog','elephant','fish','giraffe'];
let wordsWithFourLetters = words.filter(word => word.length===4);
console.log(wordsWithFourLetters);

let items = [
    {name: 'apple', category: 'fruit'},
    {name: 'carrot', category: 'vegetable'},
    {name: 'banana', category: 'fruit'}
];
let fruits = items.filter(item => item.category ==="fruit");
console.log(fruits);

let words1 = ['cat','dog','elephant','fish','giraffe'];
let wordStartsWithE = words.filter(word => word.startsWith('e'));
console.log(wordStartsWithE);


const products = [
    {name: 'Apple', category: 'fruit', price: 100},
    {name: 'Carrot', category: 'vegetable', price: 50},
    {name: 'Orange', category: 'fruit', price: 120},
    {name: 'Broccoli', category: 'vegetable', price: 75},
    {name: 'Mango', category: 'fruit', price: 110}
];
const expensiveFruits = products.filter(product => product.category === 'fruit' && product.price > 100);
console.log(expensiveFruits);


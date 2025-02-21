// More Examples Map Method

// 1. Simple Transformation
const numbers = [1,2,3,4,5];
const doubleNumbers = numbers.map(number=>number*2);
console.log(doubleNumbers);

/*
originalArray.map(current_value,index,originalArray);
*/

// 2.Modifying Array Elements
const words = ["hello","world"];
console.log(words);
const capitalizedWords = words.map(word=> word.toUpperCase());
console.log(capitalizedWords);

// 3.Combining Arrays
const fruits = ["apple","banana"];
const colors = ["red","yellow"];

const fruitColors = fruits.map((fruits,index)=>fruits+"-"+colors[index]);
console.log(fruitColors);

// 4.Filtering an Array
const numbers1 = [1,2,3,4,5];
const evenNumbers = numbers1.map(num => num % 2 === 0);
console.log(evenNumbers);

// 5.Extracting Properties from an Array of Objects.
const users = [
    {name : "Ram", age : 30},
    {name : "Sam", age : 25},
    {name : "Ravi", age : 35}
];
const names = users.map(user => user.name);
console.log(names);

// 6.Modifying an Array of Objects
console.log(users);

const updateUsers = users.map(user => {
    return{
        name: user.name,
        age: user.age+1
    }
});
console.log(updateUsers);

//
const words1 = ['apple','banana','cherry'];
const wordStats = words1.map(function(currentValue,index,array){
    return{
        word: currentValue,
        length: currentValue.length,
        position: index,
        totalWords: array.length
    };
}); 
console.log(wordStats);
// More Examples forEach Methods

// 1. Example of using the forEach method to print each element of an array:
const fruits = ['apple','banana','cherry'];
console.log(fruits);
fruits.forEach(fruit => console.log(fruit));

// 2. Example of using the forEach method to sum all elements of an array:
const numbers = [1,2,3,4,5];
let total = 0;
numbers.forEach (number => {
    total += number;
});
console.log(total);

// 3. Example of using the forEach method to create a new array from an existing one.
const doubledNumbers = [];
numbers.forEach(number => {
    doubledNumbers.push(number * 2)
});
console.log(doubledNumbers);

// 4. Example of using the forEach method to find the max elemet of an array.
console.log(numbers);
let max = numbers[0];
numbers.forEach(number => {
    if(number > max){
        max = number;
    }
});
console.log(max);

// 5. Example of using the forEach method to calculate the average of an array.
console.log(numbers);
total = 0;
let count = 0;
numbers.forEach (number => {
    total += number;
    count++;
});
console.log(total/numbers.length);
console.log(total/count);

// 6. Example of using the forEach method to filter an array:
const numbers1=[1,2,3,4,5,6,7,8,9,10];
const evenNumbers = [];

numbers1.forEach(number =>{
    if(number%2===0){
        evenNumbers.push(number);
    } 
});
console.log(evenNumbers);

// 7. Example of using the forEach method to update elements of an array:
const names= ['John','Mike','Bob','Jane'];

names.forEach((name,index)=>{
    console.log(name,index);
    names[index]=name.toUpperCase();
})
console.log(names);
// Reduce in JavaScript

/*
array.reduce(function(accumulator,currentValue,currentIndex,array){

},initialValue);
*/

let numbers = [1,2,3,4,5];
let sum = numbers.reduce((accumulator,currentValue)=> accumulator+currentValue);
console.log(sum);

//Flattening an array
let nestedArray = [[1,2],[3,4],[5,6]];
console.log(nestedArray);
let FlattenedArray = nestedArray.reduce((accumulator,currentValue)=> accumulator.concat(currentValue));
console.log(FlattenedArray);



let color = ['red','blue','green','red','blue','yellow'];
let colorCounts = color.reduce((accumulator,currentValue)=>{
    if (currentValue in accumulator){
        accumulator[currentValue]++;
    }else{
        accumulator[currentValue]=1;
    }
    return accumulator;
},{});
console.log(colorCounts);

// Largest elemet in reduce function 
let numbers1 = [45,10,15,20,25];
let largest = numbers1.reduce((accumulator,currentValue)=>{
    return Math.max(accumulator,currentValue);
});
console.log(largest)

let people = [
    {name: 'Dilakshan', age: 25, city: 'Chennai'},
    {name: 'Raj', age: 30, city: 'Salem'},
    {name: 'Sara', age: 35, city: 'Chennai'}
];

let groupedByCity = people.reduce((accumulator,currentValue)=>{
    if (currentValue.city in accumulator){
        accumulator[currentValue.city].push(currentValue);
    }else{
        accumulator[currentValue.city]=[currentValue];
    }
    return accumulator;
},{});
console.log(groupedByCity);
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
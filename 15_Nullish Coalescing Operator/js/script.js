// Nullish Coalescing Operator (??)
// The Nullish Coalescing Operator returns the right-hand operand when the left-hand operand is null or undefined.

const a = null ?? "No Value"; 
// a is null, so the result is "No Value" (because null is nullish)
console.log(a); // Output: "No Value"

const b = 25 ?? 45; 
// b is 25, so the result is 25 (because 25 is not null or undefined)
console.log(b); // Output: 25

const c = null ?? 45; 
// c is null, so the result is 45 (because null is nullish)
console.log(c); // Output: 45

// Example with an object:
const user = {"name": "Dilakshan"};
console.log(user); // Output: { name: "Dilakshan" }
console.log(user.name); // Output: "Dilakshan"

// Using nullish coalescing to assign default value to a property if it is null or undefined.
user.city ??= "Jaffna"; 
// user.city is undefined, so it gets assigned the value "Jaffna"
console.log(user.city); // Output: "Jaffna"

// Final user object with updated property
console.log(user); // Output: { name: "Dilakshan", city: "Jaffna" }

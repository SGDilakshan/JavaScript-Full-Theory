// 53_Includes in JavaScript

// Includes (value, start_index)
const products = ["Pen","Pencil","Eraser","Box","Pen"];
let result = products.includes("Pen");
console.log(result);

result = products.includes("Scale");
console.log(result);

result = products.includes("Pencil",2);
console.log(result);

result = products.includes("Pen",0);
console.log(result);
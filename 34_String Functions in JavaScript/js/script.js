// String Functions in JavaScript

let first_name = "Sivanathan";
let last_name = "Dilakshan";

// Concatenation
let c = first_name+" "+last_name;
console.log("Concatenation : "+c);

//Concat
c = first_name.concat(' '+last_name);
console.log("Concat : "+c);

//Append
c = "Sivanathan ";
c+="Dilakshan";
console.log("Append : "+c);

//Escaping
c = "She can't run";
console.log(c);

c = 'She can\'t run';
console.log("Escaping : "+c);

//Length
c = first_name.length;
console.log("Length : "+c);

//Uppercase
c = first_name.toUpperCase();
console.log("Uppercase : "+c);

//Lowercase 
c = first_name.toLowerCase();
console.log("Lowercase : "+c);

//Indexof()
c = first_name.indexOf('a');
console.log("indexof a : "+c);

//Lastindexof()
c = first_name.lastIndexOf('a');
console.log("LastIndexOf a : "+c);

//charat()
c = first_name.charAt(1);
console.log("Charat 1 : "+c);

//charcodeat()
c = first_name.charCodeAt(1);
console.log("Charat 1 : "+c);

//substr
c = first_name.substr(0,3);
console.log("substr : "+c);

//Substring
let text = "01234567890";
c = text.substring(0,4);
console.log("substring : "+c);

c = text.substring(4);
console.log("substring : "+c);

c = text.substring(4,0);
console.log("substring : "+c);

c = text.substring(25,30);
console.log("substring : "+c);

c = text.substring(-3);
console.log("substring of -3 : "+c);

//Slice
c = text.slice(2,4);
console.log("slice : "+c);

c = text.slice(4,2);
console.log("slice : "+c);

c = text.substring(25,30);
console.log("slice : "+c);

c = text.slice(-3);
console.log("slice of -3 : "+c);

//Split in js
let a="Dilakshan is a Software Engineer";
c=a.split(" ");
console.log("Split : "+c);
console.table(c);

//replace in js
a = "I am from Jaffna";
console.log("Before Replace : "+a);
c=a.replace("Jaffna","Colombo")
console.log("After Replace : "+c);

//include()
const pets = ["cat","dog","bat"];
console.log(pets.includes("cat"));
console.log(pets.includes("dog"));
console.log(pets.includes("rabbit"));

//trim()
a = " Dilakshan ";
console.log("Before Trim : "+a.length);
a = a.trim();
console.log("After Trim : "+a.length);

//padStart padEnd
a = "5";
a=a.padStart(4,0);
console.log("PadStart: "+a);

a=a.padEnd(4,0);
console.log("PadEnd : "+a);

a = "5";
a=a.padStart(3,'$');
console.log("PadStart: "+a);

//Long Literal Strings
//Methold1
let longString = "C is a general-purpose programming language."+
"It was created in the 1970s by Dennis Ritchie" +
"C's features cleanly reflect the capabilities of the targeted CPUs.";
console.log(longString);

//Methold2
longString = "C is a general-purpose programming language.\
It was created in the 1970s by Dennis Ritchie \
C's features cleanly reflect the capabilities of the targeted CPUs.";
console.log(longString);

//String.fromCharCode()
console.log(String.fromCharCode(65,66,67,68));
console.log(String.fromCharCode(97,98,99,122));
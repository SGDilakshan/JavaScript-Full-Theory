// Initialize an array of names
let names = ["Dilakshan","Ram","Raja","Sha","keerthan"];

// For loop to iterate over the array by index
for (let i = 0; i < names.length; i++) {
    // Log each name by accessing array elements using index
    console.log(names[i]);
}

console.log("---------------------------");

// For...of loop to iterate over the array
for (let name of names) {
    // Log each name directly from the array (no need for index)
    console.log(name);
}

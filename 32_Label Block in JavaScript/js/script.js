// Label Block in JavaScript

// Define a 2D array 'groups' containing multiple arrays of names
let groups = [
    ["Ram", "Sam", "Ravi"],
    ["Kumar", "Tiya", "Dilakshan"],
    ["Rajesh", "Sara", "Rahul"],
];

// Outer loop: Iterates over each group (array) in 'groups'
for (let group of groups) {
    // Label 'inner' for the inner loop
    inner:
    // Inner loop: Iterates over each name in the current group
    for (let member of group) {
        // Check if the member's name starts with 'R'
        if (member.startsWith('R')) {
            console.log("Found one starting with R: ", member);
            break inner; // Break out of the inner loop using the labeled 'inner' block
        }
    }
}

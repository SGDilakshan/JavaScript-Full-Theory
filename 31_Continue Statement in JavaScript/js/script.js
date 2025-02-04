// Demonstration of the 'continue' statement in JavaScript

// First loop: Skipping the number 4
for (let i = 1; i <= 10; i++) {
    if (i == 4) {
        continue; // Skip the rest of the loop for i = 4 and move to the next iteration
    }
    console.log(i); // Print all numbers except 4
}

console.log("-----------------------------");

// Second loop: Printing only odd numbers from 1 to 10
for (let j = 1; j <= 10; j++) {
    if (j % 2 == 0) {
        continue; // Skip even numbers and proceed with the next iteration
    }
    console.log(j); // Print only odd numbers
}

// Nested For Loop in JavaScript

let nums = [];

// Outer loop to iterate 3 times (creates 3 rows)
for (let i = 0; i < 3; i++)
{
    // Push an empty array into 'nums' to represent each row
    nums.push([]);
    
    // Inner loop to iterate 3 times (fills each row with values)
    for (let j = 0; j < 3; j++)
    {
        // Push values (0, 1, 2) into the current row
        nums[i].push(j);
    }
}

// Log the 2D array to the console
console.log(nums);

// Display the 2D array in a table format for better visualization
console.table(nums);

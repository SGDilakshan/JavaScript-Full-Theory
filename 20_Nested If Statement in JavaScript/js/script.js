// Nested If Statement in JavaScript

/*
Syntax:
if (condition) {
    if (condition) {
        // Code executes if both conditions are true
    }
}
*/

/*
Grading Criteria:
- Minimum passing mark: 35 in each subject
- 91 - 100 -> A Grade
- 81 - 90  -> B Grade
- 71 - 80  -> C Grade
- Other    -> D Grade (Pass)
- If failed -> No Grade
*/

let english = 95, tamil = 98, maths = 75;
let total, avg;

// Calculate total and average marks
total = english + tamil + maths;
avg = total / 3;

// Display total and average marks
console.log("Total   : " + total);
console.log("Average : " + avg.toFixed(2));

// Check if the student has passed all subjects
if (english >= 35 && tamil >= 35 && maths >= 35) {
    console.log("Result  : Pass");

    // Assign grade based on the average
    if (avg > 90 && avg <= 100) 
    {
        console.log("Grade   : A");
    } 
    else if (avg > 80 && avg <= 90)
    {
        console.log("Grade   : B");
    }
    else if (avg > 70 && avg <= 80)
    {
        console.log("Grade   : C");
    }
    else{
        console.log("Grade   : D");
    }
}
else
{
    console.log("Result  : Fail");
    console.log("Grade   : No Grade");
}

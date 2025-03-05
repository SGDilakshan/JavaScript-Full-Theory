# JavaScript-Full-Theory
Here, we can learn JavaScript Full Theory Basics to Advance.

# 01_First Basic Program in JavaScript  

This HTML file demonstrates how to include **JavaScript** in a webpage using both **inline and external scripts**.  
## Key Features:  

- **Inline JavaScript (Commented Out)**  
  - `<script>` inside the HTML file.  
  - Displays an alert box with `"Welcome to JS"`.  

- **External JavaScript File (`script.js`)**  
  - The `<script src="js/script.js">` tag links an external JavaScript file.  
  - The script contains `alert("Welcome to JS from external file")`, which triggers an alert box when the page loads.  

## File Structure:  
- `index.html` – Loads the JavaScript file.  
- `js/script.js` – External JavaScript file that runs the alert.  

This example introduces **JavaScript integration** in HTML, helping you understand inline and external scripting. 🚀  

---------------------------------------------------------------------------------------

# 02_Console in JavaScript  

This project demonstrates how to use the **JavaScript Console** for debugging and logging information.  
## Key Features:  

- **Alert Message (Commented Out in `script.js`)**  
  - `alert("Welcome");` – Displays a pop-up alert message.  

- **Console Logging (`console.log`)**  
  - `console.log("Welcome to JavaScript");` – Prints a text message.  
  - `console.log(13456);` – Prints a number.  
  - `console.log(18.25);` – Prints a decimal number.  
  - `console.log(true);` – Prints a boolean value.  
  - `console.log([58,78,96,35]);` – Prints an array.  
  - `console.log([{fname:'Dilakshan', age:25}]);` – Prints an object.  

- **Console Table (`console.table`)**  
  - Displays structured object data in a table format.  

- **Console Errors & Warnings**  
  - `console.error("Custom Sample Error");` – Displays an error message.  
  - `console.warn("Custom Sample Warning");` – Displays a warning message.  

- **Console Timing (`console.time` & `console.timeEnd`)**  
  - Measures the execution time of a loop.  

- **Console Clear (`console.clear`)**  
  - Clears the console output.  

## File Structure:  
- `index.html` – Loads the external JavaScript file.  
- `js/script.js` – Contains JavaScript console functions.  

This example helps you understand how to use the **JavaScript console** for debugging and performance analysis. 🚀  

---------------------------------------------------------------------------------------

# 03_Var,let, and const in JavaScript

## Key Points:

### 1. **Scope**
- **`var`**: Function-scoped (accessible within the function or globally).
- **`let`** and **`const`**: Block-scoped (only accessible inside the block where declared).

### 2. **Redeclaration**
- **`var`**: Allows redeclaration in the same scope.
- **`let`** and **`const`**: Do not allow redeclaration in the same scope.

### 3. **Reassignment**
- **`var`** and **`let`**: Allow reassignment.
- **`const`**: Does not allow reassignment after declaration.

### 4. **Use Cases**
- **`var`**: Suitable for function-wide or global variables.
- **`let`**: Suitable for variables that might change, but should be confined to a block.
- **`const`**: Used for variables that should not be reassigned, providing immutability.

## Conclusion:
- **`var`** is function-scoped and allows both redeclaration and reassignment.
- **`let`** and **`const`** are block-scoped; **`let`** allows reassignment, while **`const`** does not.

---------------------------------------------------------------------------------------

# 04_Data Types in JavaScript

This project demonstrates the basic **data types** in JavaScript, including both **primitive** and **reference** types.
## Key Concepts:

### 1. **Primitive Data Types** (Simple Types)
- **String**: Represents text data.
- **Number**: Can be a decimal or whole number.
- **Boolean**: Represents true or false values.
- **Null**: Represents no value or an empty value.
- **Undefined**: A variable that is declared but not assigned any value.
- **Symbol** (ES6): A unique and immutable value, often used as object property keys.

### 2. **Reference Data Types** (Complex Types)
- **Arrays**: A list-like structure used to store multiple values in a single variable.
- **Objects**: A collection of key-value pairs where each key is a string, and the value can be any data type.
- **Date**: Represents date and time.
- **Functions**: A block of code designed to perform a task or calculate a value.

## Summary:
JavaScript uses **primitive data types** to store simple values such as numbers, strings, and booleans, and **reference data types** for more complex structures like arrays, objects, and functions. 

- **Primitive data types**: These are immutable and include strings, numbers, booleans, null, undefined, and symbols.
- **Reference data types**: These are mutable and include arrays, objects, and functions.

Understanding the differences between primitive and reference data types is essential for effective JavaScript programming, as it helps to manage variables, handle memory, and understand the behavior of values in your program.

## Key Takeaways:
- Primitive data types are basic and immutable.
- Reference data types are complex and mutable.
- JavaScript also introduced **Symbols** in ES6 to create unique identifiers.

These concepts form the foundation for working with variables and handling data in JavaScript.

---------------------------------------------------------------------------------------

# 05_Type Conversion in JavaScript  

This project demonstrates how to convert values between different **data types** in JavaScript, including converting **numbers to strings**, **strings to numbers**, and handling **NaN (Not a Number)** cases.
## Key Concepts:

### 1. **Converting Numbers to Strings**
- The `String()` function converts numbers into strings.
- The `.toString()` method also converts numbers to strings.

### 2. **Converting Other Data Types to Strings**
- **Booleans**, **arrays**, **dates**, and other types can also be converted to strings.
- Arrays are converted to comma-separated string values.
  
### 3. **Converting Strings to Numbers**
- `Number()` converts a string representation of a number into a numeric value.
- `parseInt()` converts a string to an integer, removing any decimal places.
- `parseFloat()` converts a string to a floating-point number, keeping decimals.

### 4. **Boolean and Array Conversion**
- `true` converts to `1`, and `false` converts to `0` when using `Number()`.
- Converting an array directly to a number results in `NaN` (Not a Number).

### 5. **Handling NaN (Not a Number)**
- When a non-numeric string is converted using `Number()`, it returns `NaN`.

## Summary:
- **`String()` and `.toString()`** are used to convert numbers and other data types into strings.
- **`Number()`** is used to convert strings into numbers, but it returns `NaN` for non-numeric values.
- **`parseInt()`** and **`parseFloat()`** are useful for extracting integer and decimal values from strings.
- **Boolean values** convert to `1` (true) or `0` (false) when using `Number()`.

Understanding type conversion is essential in JavaScript for handling data correctly and avoiding unexpected results in calculations or data processing.

---------------------------------------------------------------------------------------

# 06_Type Coercion in JavaScript  

This project demonstrates **type coercion** in JavaScript, where JavaScript automatically converts data types during operations.  

## Key Concepts:  

### 1. **What is Type Coercion?**  
- **Type coercion** happens when JavaScript **automatically converts** one data type into another when performing operations.  
- This mainly occurs in **string and number operations**.  

### 2. **Implicit Type Coercion (Automatic Conversion)**  
- When adding a number to a string, JavaScript **converts the number into a string** and performs string concatenation.  
- Example: `"25" + 10` results in `"2510"` (string).  

### 3. **Explicit Type Conversion (Manual Conversion)**  
- We can manually convert a string into a number using **`Number()`** before performing operations.  
- Example: `Number("25") + 10` results in `35` (number).  

## Summary:  
- **JavaScript automatically converts data types** in operations (implicit coercion).  
- **Explicit conversion** using `Number()`, `String()`, etc., helps ensure expected results.  
- Understanding coercion prevents unexpected bugs in calculations and string operations.  

---------------------------------------------------------------------------------------

# 07_Arithmetic Operations in JavaScript   

This project demonstrates basic **arithmetic operations** in JavaScript. Arithmetic operators are used to perform mathematical calculations on numbers.
## Key Concepts:  

### 1. **Basic Arithmetic Operators**  
- **Addition (`+`)** → Adds two numbers.  
- **Subtraction (`-`)** → Subtracts one number from another.  
- **Multiplication (`*`)** → Multiplies two numbers.  
- **Division (`/`)** → Divides one number by another.  
- **Modulus (`%`)** → Returns the remainder of a division.  
- **Exponentiation (`**`)** → Raises a number to the power of another number.  

### 2. **Increment and Decrement Operators**  
- **Increment (`++`)** → Increases a variable's value by `1`.  
- **Decrement (`--`)** → Decreases a variable's value by `1`.  

## Summary:  
- JavaScript provides basic operators for performing mathematical calculations.  
- The **modulus operator (`%`)** is useful for checking divisibility.  
- **Exponentiation (`**`)** simplifies power calculations.  
- **Increment (`++`) and Decrement (`--`)** modify values directly.  

Understanding these operators is essential for handling numerical calculations in JavaScript. 🚀  

---------------------------------------------------------------------------------------

# 08_Assignment Operators in JavaScript 

## Summary:
In JavaScript, **assignment operators** are used to assign values to variables while performing specific operations. The basic assignment operator (`=`) assigns a value to a variable. There are also compound assignment operators that combine an operation with assignment in a single step, such as:

- `+=` (Addition assignment)
- `-=` (Subtraction assignment)
- `*=` (Multiplication assignment)
- `/=` (Division assignment)
- `%=` (Modulus assignment)
- `**=` (Exponentiation assignment)

These operators help make the code more concise and readable, as they allow combining operations with the assignment of the result. The use of assignment operators simplifies repetitive tasks and enhances efficiency when performing mathematical calculations or operations on variables.

Assignment operators are widely used in loops, conditionals, and many other areas of JavaScript to perform calculations and assign values to variables simultaneously.

---------------------------------------------------------------------------------------

## 09_Comparison Operators in JavaScript

Comparison operators in JavaScript are used to compare two values or expressions. These operators return a Boolean value (`true` or `false`) based on the comparison result.
### Key Comparison Operators:

1. **`==` (Equality Operator)**:
   - Compares the **values** of two operands, ignoring their data types. If the values are equal, it returns `true`; otherwise, `false`.
   - Example: `a == b`

2. **`===` (Strict Equality Operator)**:
   - Compares both the **value** and the **data type** of two operands. If both are equal, it returns `true`; otherwise, `false`.
   - Example: `a === b`

3. **`!=` (Inequality Operator)**:
   - Compares the **values** of two operands to check if they are not equal. If they are not equal, it returns `true`; otherwise, `false`.
   - Example: `a != b`

4. **`!==` (Strict Inequality Operator)**:
   - Compares both the **value** and the **data type** of two operands to check if they are not equal. If either the value or the data type differs, it returns `true`; otherwise, `false`.
   - Example: `a !== b`

### Key Points:
- `==` compares **only values**, while `===` compares both **values and data types**.
- `!=` checks for inequality in **values**, while `!==` checks for inequality in **both values and data types**.

---------------------------------------------------------------------------------------

## 10_Relational Operators in JavaScript

Relational operators are used to compare two values and return a boolean value (`true` or `false`) based on the comparison. These operators help you perform basic comparisons between numbers, strings, or variables.

The main relational operators in JavaScript are:

1. **`>` (greater than)**: Returns `true` if the value on the left is greater than the value on the right.
2. **`<` (less than)**: Returns `true` if the value on the left is less than the value on the right.
3. **`>=` (greater than or equal to)**: Returns `true` if the value on the left is greater than or equal to the value on the right.
4. **`<=` (less than or equal to)**: Returns `true` if the value on the left is less than or equal to the value on the right.

These relational operators are useful for making decisions in your code and controlling the flow of your program based on conditions.

---------------------------------------------------------------------------------------

## 11_Logical Operators in JavaScript

This project demonstrates the usage of **logical operators** in JavaScript: AND (`&&`), OR (`||`), and NOT (`!`). Logical operators are used to combine conditional statements and evaluate multiple conditions in a concise way.

- **AND (&&)**: Returns `true` only if both conditions are true.
- **OR (||)**: Returns `true` if at least one condition is true.
- **NOT (!)**: Inverts the boolean value of a condition.

These operators are essential for handling complex logical checks in conditional structures like `if` statements, loops, and more.

---------------------------------------------------------------------------------------

# 12_Strict equality or Identity Operator in JavaScript

JavaScript provides two types of equality operators:

1. **Loose Equality (`==`)**:  
   - Compares values **without checking data types**.
   - Performs **type coercion**, converting values to a common type before comparison.
   - Example: `10 == "10"` → `true`

2. **Strict Equality (`===`)**:  
   - Compares **both values and data types**.
   - No type conversion occurs; both values must be of the same type to return `true`.
   - Example: `10 === "10"` → `false`

## Key Observations:

- `0 == false` → `true`, but `0 === false` → `false`
- `"" == false` → `true`, but `"" === false` → `false`
- `null == undefined` → `true`, but `null === undefined` → `false`
- Objects and primitive values behave differently:  
  - `new String("Dilakshan") == "Dilakshan"` → `true`
  - `new String("Dilakshan") === "Dilakshan"` → `false`

## Conclusion:

- Use **`==` (loose equality)** when type conversion is expected.
- Use **`===` (strict equality)** for precise comparisons to avoid unexpected results.
- Strict equality (`===`) is preferred for **better code reliability and clarity**.

---------------------------------------------------------------------------------------

# 13_Conditional or Ternary Operator in JavaScript

This README summarizes examples of the ternary (conditional) operator in JavaScript.
1. **Simple Ternary Operation:**
   - Checks if a condition (age) is true and returns corresponding values.
   
2. **Handling Null or Undefined:**
   - Uses the ternary operator to handle null/undefined values in a function.

3. **Object Usage:**
   - Demonstrates working with objects and accessing their properties.

4. **Ternary with Object Property:**
   - Uses the ternary operator to check if an object property exists.

5. **Conditional Chains:**
   - Implements multiple conditions in a chain using the ternary operator.

Example code provided covers all these use cases.

---------------------------------------------------------------------------------------

# 14_Bitwase Operations in JavaScript

This README provides examples of common bitwise operations in JavaScript.
### Bitwise Operators:
- **Bitwise AND (&)**: Performs a bitwise AND operation.
- **Bitwise OR (|)**: Performs a bitwise OR operation.
- **Bitwise NOT (~)**: Inverts all the bits.
- **Bitwise XOR (^)**: Performs a bitwise XOR operation.
- **Left Shift (<<)**: Shifts the bits of a number to the left.
- **Right Shift (>>)**: Shifts the bits of a number to the right.
- **Unsigned Right Shift (>>>)**: Shifts the bits of a number to the right, ensuring a positive result.

---------------------------------------------------------------------------------------

# 15_Nullish Coalescing Operator (??)

The Nullish Coalescing Operator (`??`) in JavaScript is used to return the right-hand operand when the left-hand operand is `null` or `undefined`.
### Key Points:
- If the left-hand value is `null` or `undefined`, the right-hand value is returned.
- If the left-hand value is not `null` or `undefined`, it is returned as-is.
- It is particularly useful for providing default values when working with variables or object properties that may be `null` or `undefined`.
- The operator does not consider other falsy values like `0`, `false`, or an empty string (`""`).

### Common Use Cases:
- Setting default values for variables.
- Assigning fallback values to object properties that are `null` or `undefined`.

The `??` operator is an effective tool for handling nullish values in JavaScript, offering a clean and readable way to work with default values.

---------------------------------------------------------------------------------------

# 16_Increment or Decrement in JavaScript

In JavaScript, increment (`++`) and decrement (`--`) operators are used to increase or decrease a variable’s value by 1.
### Key Operators:

- **Postfix Increment (`a++`)**: Increments the variable after its value is used.
- **Prefix Increment (`++a`)**: Increments the variable before its value is used.
- **Postfix Decrement (`a--`)**: Decrements the variable after its value is used.
- **Prefix Decrement (`--a`)**: Decrements the variable before its value is used.

### Examples:

1. **Postfix Increment**: The value of `a` is used first, and then `a` is incremented.
   - Example: `a++` → `a` is used and then incremented.
   
2. **Prefix Increment**: The value of `a` is incremented first, and then the new value of `a` is used.
   - Example: `++a` → `a` is incremented and then used.

3. **Postfix Decrement**: The value of `a` is used first, and then `a` is decremented.
   - Example: `a--` → `a` is used and then decremented.

4. **Prefix Decrement**: The value of `a` is decremented first, and then the new value of `a` is used.
   - Example: `--a` → `a` is decremented and then used.

### Example Outputs:
- **Postfix Increment**: If `x = 3`, after `y = x++`, `x` becomes 4 and `y` remains 3.
- **Prefix Increment**: If `i = 3`, after `j = ++i`, both `i` and `j` become 4.
- **Postfix Decrement**: If `m = 6`, after `n = m--`, `m` becomes 5 and `n` remains 6.
- **Prefix Decrement**: If `p = 6`, after `q = --p`, both `p` and `q` become 5.

These operators are used to perform quick increments or decrements while accessing the current value of the variable in expressions.

---------------------------------------------------------------------------------------

# 17_If Statement in JavaScript

The `if` statement in JavaScript is used to execute a block of code only if a specified condition is `true`.

## Key Points:
- The `if` statement allows conditional execution of code based on a given condition.
- If the condition evaluates to `true`, the code inside the `if` block runs.
- If the condition evaluates to `false`, the code inside the `if` block is skipped.
- It is commonly used for decision-making in programs.

## Example Use Case:
- Checking user input before executing certain actions.
- Validating form fields in web applications.
- Controlling program flow based on specific conditions.

The `if` statement is a fundamental concept in JavaScript for implementing logic and decision-making.


---------------------------------------------------------------------------------------

# 18_If Else Statement in JavaScript

The `if-else` statement in JavaScript is used to execute different blocks of code based on whether a condition is `true` or `false`.

## Key Points:
- The `if` block executes when the condition is `true`.
- The `else` block executes when the condition is `false`.
- It ensures that one of the two possible outcomes is always executed.
- Used for decision-making in programs where there are two possible cases.

## Example Use Case:
- Checking user eligibility for voting based on age.
- Validating user authentication and displaying appropriate messages.
- Displaying different outputs based on a given condition.

The `if-else` statement is a fundamental control structure for handling conditional logic in JavaScript.

---------------------------------------------------------------------------------------

# 19_Else If Statement in JavaScript

The `else if` statement in JavaScript is used when multiple conditions need to be checked sequentially. It allows executing different blocks of code based on different conditions.

## Key Points:
- The `if` block executes if the first condition is `true`.
- If the first condition is `false`, the `else if` block checks the next condition.
- If none of the conditions are `true`, the `else` block executes as a fallback.
- Used when there are multiple possible outcomes based on different conditions.

## Example Use Cases:
- Checking whether a number is positive, negative, or zero.
- Assigning grades based on a student's average score.
- Handling multiple conditions in form validation or user input processing.

The `else if` statement provides a structured way to manage multiple conditions efficiently in JavaScript.

---------------------------------------------------------------------------------------

# 20_Nested If Statement in JavaScript

The `nested if` statement in JavaScript is used when one `if` statement is placed inside another `if` statement. This is useful for checking multiple conditions where one condition depends on another.

## Key Points:
- The outer `if` condition must be `true` for the inner `if` statement to be evaluated.
- The inner `if` block checks additional conditions and executes specific code accordingly.
- Used when decisions are dependent on multiple conditions.

## Example Use Cases:
- Assigning grades based on an average score, only if the student has passed all subjects.
- Checking multiple dependent conditions in form validations.
- Implementing complex decision-making logic in applications.

The `nested if` statement allows for structured decision-making where one condition is dependent on another.

---------------------------------------------------------------------------------------

# 21_Switch Statement in JavaScript

The `switch` statement in JavaScript is used to execute different blocks of code based on a specific value. It is an alternative to using multiple `if-else` statements when checking for multiple conditions.

## Key Points:
- The `switch` statement evaluates an expression and matches it with a `case` label.
- The `case` block executes when a match is found.
- The `break` statement is used to exit the `switch` block after executing a `case`, preventing fall-through.
- The `default` case executes if no matches are found.

## Example Use Cases:
- Handling user input selections (e.g., menu options).
- Mapping numerical or string values to corresponding outputs.
- Implementing simple control flow logic in applications.

The `switch` statement provides a clear and efficient way to handle multiple conditions in JavaScript.

---------------------------------------------------------------------------------------

# 22_Combining Cases Statement in JavaScript

## Overview
In JavaScript, multiple `case` statements in a `switch` block can be combined when they share the same execution code. This helps reduce redundancy and improves readability.

## Use Case
The technique is useful when multiple values should trigger the same logic, such as checking if a letter is a vowel.

## Example Explanation
- The program checks if a given letter is a vowel (`a, e, i, o, u, A, E, I, O, U`).
- If the letter matches any vowel case, it executes the same block of code.
- If it does not match any, the `default` case executes, indicating it's not a vowel.

## Advantages
- Avoids repetition in code.
- Enhances code clarity and maintainability.

---------------------------------------------------------------------------------------

# 23_While Loop In JavaScript

The `while` loop in JavaScript executes a block of code repeatedly as long as the specified condition evaluates to `true`. It is useful when the number of iterations is not predetermined.

## Key Points:
- The condition is checked before executing the loop body.
- If the condition is `false` initially, the loop will not execute at all.
- The loop continues running until the condition becomes `false`.

## Usage:
- Used when the number of iterations is unknown beforehand.
- Helps in scenarios like reading user input until a valid value is provided.
- Commonly used for waiting for events or processing dynamic data.

---------------------------------------------------------------------------------------

# 24_Do While Loop in JavaScript

The `do...while` loop in JavaScript is a type of loop that executes the code block at least once before checking the condition. It ensures that the block runs at least once, even if the condition is `false` initially.

## Features:
- Executes the block **at least once** before checking the condition.
- Useful when the loop body **must run at least once** regardless of the condition.
- Continues execution **as long as the condition remains true**.

## Use Case:
The `do...while` loop is ideal when you need to ensure that an operation executes **before** validating a condition, such as:
- Prompting a user for input until they provide valid data.
- Performing calculations where at least one iteration is necessary.

---------------------------------------------------------------------------------------

# 25_For Loop in JavaScript

This README explains the usage of the `for` loop in JavaScript with a few examples.
## Overview

The `for` loop in JavaScript is used to execute a block of code a specified number of times. The basic syntax of the `for` loop is:

- **Initialization**: Sets the starting point (runs once before the loop starts).
- **Condition**: Tests whether the loop should continue (evaluated before each iteration).
- **Increment/Decrement**: Updates the loop variable (runs after each iteration).

---------------------------------------------------------------------------------------

# 26_Nested For Loop in JavaScript

This example demonstrates how to create and display a 2D array using nested `for` loops in JavaScript.
## Key Points:
- The outer loop creates 3 rows in the `nums` array.
- The inner loop fills each row with values (0, 1, 2).
- The resulting 2D array is logged using `console.log()` and displayed in a table format using `console.table()`.

## Example Use Cases:
- Populating 2D arrays or grids.
- Displaying multi-dimensional data in a structured format.

---------------------------------------------------------------------------------------

# 27_For of Loop in Javascript

This example demonstrates the usage of both traditional `for` loop and `for...of` loop to iterate over an array.
## Key Points:
- The traditional `for` loop iterates over the array using an index.
- The `for...of` loop simplifies iteration by directly accessing each element in the array.

## Example Use Cases:
- Iterating over arrays or collections of data.
- Accessing array elements without needing to manage an index manually.

---------------------------------------------------------------------------------------

# 28_For in Loop in JavaScript

This example demonstrates how to use the `for...in` loop to iterate over the properties of an object.

## Key Points:
- The `for...in` loop is used to iterate over the enumerable properties of an object.
- The loop provides access to both the property names and their corresponding values.

## Example Use Cases:
- Iterating over the properties of an object to access or manipulate data.
- Displaying key-value pairs of an object.

---------------------------------------------------------------------------------------

# 29_Looping over objects by converting to an array

This example demonstrates how to iterate over an object's properties by converting them into arrays using `Object.keys()` and `Object.values()`.

## Key Points:
- `Object.keys(object)`: Returns an array of the object's property names.
- `Object.values(object)`: Returns an array of the object's property values.
- Looping through the keys array allows access to both keys and values efficiently.

## Example Use Cases:
- Extracting and displaying object data in a structured format.
- Iterating over object properties dynamically without knowing their names in advance.
- Using key-value pairs for processing or manipulation in applications.

---------------------------------------------------------------------------------------

# 30_Break Statement in JavaScript

The `break` statement in JavaScript is used to exit a loop immediately when a specific condition is met.

## Key Points:
- The `break` statement stops the execution of a loop before it naturally completes.
- Commonly used in `for`, `while`, and `do-while` loops.
- Helps improve efficiency by preventing unnecessary iterations.

---------------------------------------------------------------------------------------

# 31_Continue Statement in JavaScript

The `continue` statement in JavaScript is used to skip the current iteration of a loop and move to the next one.

## Key Points:
- When `continue` is encountered, the loop skips the rest of the current iteration and proceeds to the next cycle.
- Commonly used in `for`, `while`, and `do-while` loops.
- Helps in selectively skipping certain values based on conditions.

## Example Use Cases:
- Skipping a specific number in a loop.
- Filtering out unwanted values while iterating over a list.
- Processing only certain elements in an array or dataset.

---------------------------------------------------------------------------------------

# 32_Label Block in JavaScript

The **Label Block** in JavaScript is used to assign a label to a loop or block of code, allowing control flow statements like `break` or `continue` to target specific loops.

## Key Points:
- Labels provide a way to break or continue nested loops explicitly.
- The `break labelName;` statement exits the labeled loop or block.
- The `continue labelName;` statement skips the current iteration of the labeled loop.

## Example Use Cases:
- Exiting deeply nested loops efficiently.
- Skipping iterations of an outer loop based on conditions.
- Improving readability in complex loop structures.

---------------------------------------------------------------------------------------

# 33_Math Functions in JavaScript

## Overview  
JavaScript provides a set of built-in `Math` functions to perform various mathematical operations efficiently.  

## Key Points  

- **Mathematical Constants**  
  - `Math.PI` – Represents the value of π.  
  - `Math.E` – Represents Euler's number.  

- **Rounding Functions**  
  - `Math.round(value)` – Rounds to the nearest integer.  
  - `Math.floor(value)` – Rounds down to the nearest integer.  
  - `Math.ceil(value)` – Rounds up to the nearest integer.  

- **Basic Operations**  
  - `Math.sqrt(value)` – Computes the square root.  
  - `Math.abs(value)` – Returns the absolute value.  
  - `Math.pow(base, exponent)` – Computes power.  
  - `Math.trunc(value)` – Removes the decimal part.  

- **Min/Max Functions**  
  - `Math.min(a, b, c, ...)` – Returns the smallest value.  
  - `Math.max(a, b, c, ...)` – Returns the largest value.  

- **Random Number Generation**  
  - `Math.random()` – Generates a random number between `0` and `1`.  
  - `Math.floor(Math.random() * range + min)` – Generates a random number within a specific range.  

- **Sign Function**  
  - `Math.sign(value)` – Determines if a number is positive, negative, or zero.  

- **Trigonometric Functions**  
  - `Math.sin(angle)` – Computes the sine of an angle.  
  - `Math.cos(angle)` – Computes the cosine of an angle.  

- **Logarithmic Functions**  
  - `Math.log(value)` – Computes the natural logarithm.  
  - `Math.log2(value)` – Computes the base-2 logarithm.  
  - `Math.log10(value)` – Computes the base-10 logarithm.  

## Conclusion  
JavaScript's `Math` functions provide essential tools for mathematical computations, making it easier to handle calculations, random number generation, and trigonometric operations.  

---------------------------------------------------------------------------------------

# 34_String Functions in JavaScript

This document provides a summary of various string functions available in JavaScript.

## 1. String Concatenation
- Combines two or more strings using the `+` operator or the `concat()` method.

## 2. String Appending
- Adds additional content to an existing string using the `+=` operator.

## 3. Escaping Characters
- Handles special characters in strings using escape sequences.

## 4. String Length
- Retrieves the number of characters in a string using the `length` property.

## 5. Changing Case
- Converts a string to uppercase using `toUpperCase()` and to lowercase using `toLowerCase()`.

## 6. Finding Characters
- Finds the first occurrence of a character using `indexOf()`.
- Finds the last occurrence using `lastIndexOf()`.
- Retrieves a specific character using `charAt()`.
- Gets the ASCII/Unicode value using `charCodeAt()`.

## 7. Extracting Substrings
- Uses `substr()` and `substring()` to extract parts of a string.
- Uses `slice()` for extracting parts, including negative indexing.

## 8. Splitting a String
- Splits a string into an array using `split()`.

## 9. Replacing Text
- Replaces parts of a string using `replace()`.

## 10. Checking for Substrings
- Checks if a string contains a specific substring using `includes()`.

## 11. Trimming Whitespace
- Removes leading and trailing spaces using `trim()`.

## 12. Padding Strings
- Uses `padStart()` and `padEnd()` to add characters to the beginning or end of a string.

## 13. Long Literal Strings
- Uses different methods to write multi-line strings.

## 14. Character Encoding
- Uses `String.fromCharCode()` to generate characters from Unicode values.

This summary provides a basic overview of essential JavaScript string functions for efficient string manipulation.

---------------------------------------------------------------------------------------

# 35_Function in JavaScript

This document provides a summary of JavaScript functions with a focus on functions that return values.

## 1. Function with Return Statement
- A function in JavaScript can return a value using the `return` statement.
- The returned value can be used in expressions or assigned to variables.

## 2. Function Parameters
- Functions can take parameters to process input values.
- Parameters allow functions to be reusable and dynamic.

## 3. Calling a Function
- A function is executed when it is called by using its name followed by parentheses `()` with arguments.

## 4. Benefits of Using Functions
- Improves code reusability and modularity.
- Reduces code duplication.
- Makes code more readable and maintainable.

This summary provides an introduction to defining and using functions in JavaScript.

---------------------------------------------------------------------------------------

# 36_Function with arbitrary argument in JavaScript

This document provides a summary of handling arbitrary arguments in JavaScript functions.

## 1. Function with Arbitrary Arguments
- JavaScript functions can accept an indefinite number of arguments using the `arguments` object.
- The `arguments` object is an array-like structure containing all passed parameters.

## 2. Iterating Over Arguments
- A `for` loop can be used to iterate over the `arguments` object and process each value dynamically.

## 3. Using the Spread Operator (`...`)
- The spread operator (`...`) allows functions to accept multiple arguments as an array.
- It provides a modern and preferred way to handle arbitrary parameters in JavaScript.

## 4. Benefits of Using Arbitrary Arguments
- Enables flexible function calls with varying numbers of arguments.
- Reduces the need to define multiple function overloads.
- Improves readability and maintainability of code.

This summary introduces handling arbitrary arguments efficiently in JavaScript.

---------------------------------------------------------------------------------------

# 37_Function as Expression in JavaScript

## 1. Function Expressions
- A function can be assigned to a variable, known as a function expression.
- Unlike function declarations, function expressions do not have names (anonymous functions).

## 2. Usage
- Function expressions can be stored in variables and passed as arguments.
- They are useful in callbacks and event handling.

## 3. Example
- A function expression can perform operations like addition and return a result.

This summary provides a brief introduction to function expressions in JavaScript.

---------------------------------------------------------------------------------------

# 38_Arrow Function in JavaScript

This project demonstrates various JavaScript **arrow functions** and their applications.

## Features

1. **Arrow Function Syntax**
   - A concise way to define functions in JavaScript.
   - Example: `const add = (a, b) => { return a + b; };`

2. **Arrow Function with `map()`**
   - Used to transform each element in an array.
   - Example: Multiplying each number in an array by 2.

3. **Arrow Function with `filter()`**
   - Used to filter elements based on a condition.
   - Example: Filtering words with more than 5 characters.

4. **Arrow Function with `reduce()`**
   - Used to perform a calculation on an array.
   - Example: Summing up all numbers in an array.

5. **Arrow Function with Closures**
   - Demonstrates a function that returns another function.
   - Example: Creating a counter function that maintains state.

## Usage

- Run the script in a browser console or Node.js environment.
- Observe the different outputs for each arrow function example.

## Benefits of Arrow Functions

- **Shorter Syntax**: Reduces boilerplate code.
- **Lexical `this` Binding**: Arrow functions inherit `this` from their enclosing scope.
- **Improved Readability**: Makes callback functions more concise.

---------------------------------------------------------------------------------------

# 39_Callback in JavaScript

This README explains how callback functions are used in JavaScript, including examples of higher-order functions, `setTimeout`, `setInterval`, and `forEach`.

## What is a Callback Function?
A **callback function** is a function that is passed as an argument to another function and is executed at a later time. The callback function can be invoked once a certain operation or event is completed.

---------------------------------------------------------------------------------------

# 40_Block Scope & Function Scope in JavaScript

This README explains the concepts of **Block Scope** and **Function Scope** in JavaScript. It also discusses the differences between variables declared with `let`, `const`, and `var`.

## Block Scope

In JavaScript, a variable declared inside a block (e.g., inside an `if` statement, loop, or any other block) using `let` or `const` is said to have **block scope**. This means the variable is only accessible within the block in which it is declared and cannot be accessed outside of that block. A block is defined by curly braces `{}`, and block-scoped variables are created only for the duration of that block's execution.

## Function Scope

In JavaScript, a variable declared inside a function using `var` has **function scope**. This means the variable is only accessible within the function in which it is declared. A variable with function scope is created when the function is invoked and is destroyed when the function execution is complete. It cannot be accessed from outside the function, making it invisible to the rest of the program.

## Key Differences

- **Block Scope**: Variables declared using `let` or `const` are block-scoped and can only be accessed within the block where they are declared.
- **Function Scope**: Variables declared using `var` are function-scoped and can be accessed within the function where they are declared, as well as in any nested functions.

## Conclusion

Understanding **block scope** and **function scope** is crucial for managing variable lifetimes and avoiding scope-related bugs in JavaScript programs. The use of `let` and `const` for block-scoped variables provides more predictable behavior compared to `var`, which has function scope.

---------------------------------------------------------------------------------------

# 41_Array in JavaScript

## Introduction
JavaScript arrays store multiple values and support various built-in methods for manipulation.

## Key Methods
- **Iteration:** `forEach`, `map`
- **Modification:** `push`, `pop`, `shift`, `unshift`, `splice`
- **Searching:** `indexOf`, `lastIndexOf`, `includes`, `find`, `findIndex`
- **Transformation:** `slice`, `concat`, `sort`, `reverse`, `join`, `fill`
- **Filtering & Reducing:** `filter`, `reduce`, `every`, `some`
- **Utility:** `from`, `isArray`, `flat`

## Conclusion
Mastering these methods enhances efficiency and readability in JavaScript programming.

---------------------------------------------------------------------------------------

# 42_Foreach in JavaScript

## Overview
This document demonstrates how to use the `forEach` method in JavaScript to iterate over arrays. It includes two main examples:
1. Iterating over a simple array of numbers.
2. Iterating over an array of objects representing users.

## Key Concepts
### 1. Iterating Through Numbers
An array of numbers is created, and the `forEach` method is used to iterate over the array and print each number.

### 2. Iterating with Index and Value
The `forEach` method allows both the value and the index of each element to be accessed during the iteration. In this case, the index and value of each number in the array are printed.

### 3. Working with User Data
An array of user objects is created, with each object containing properties such as `full_name`, `age`, `city`, and `salary`. The `forEach` method is used to iterate through this array, and the `full_name` property of each user is printed.

## Conclusion
The `forEach` method is a great tool for iterating over arrays in JavaScript, whether you're working with simple data like numbers or more complex data structures like objects. It simplifies the process of accessing both the index and the value in the iteration.

---------------------------------------------------------------------------------------

# 43_More Examples forEach Methods

This document provides an overview of various use cases for the `forEach` method in JavaScript.

## **Overview**
The `forEach` method is used to iterate over elements in an array and perform operations on each element. Below are some practical applications:

- **Printing Elements:** Iterating through an array to display each value.
- **Summing Elements:** Accumulating values to compute a total sum.
- **Creating a New Array:** Generating a transformed version of an existing array.
- **Finding the Maximum Element:** Determining the largest value in an array.
- **Calculating the Average:** Computing the mean of numeric values in an array.
- **Filtering an Array:** Extracting elements that meet specific criteria.
- **Updating Elements:** Modifying array elements in place.

## **Usage**

This method is useful for applying functions to array elements without creating new arrays or modifying the original array structure significantly.

---------------------------------------------------------------------------------------

# 44_Map in JavaScript

## 1. **Using `map()` with Numbers**  
- The `map()` method is applied to an array of numbers.  
- Each number is processed using `Math.sqrt()` to find its square root.  
- The result is rounded to two decimal places using `.toFixed(2)`.  
- The transformed values are displayed in a table format.  

## 2. **Using `map()` with Objects**  
- An array of user objects is created with details like name, age, city, and salary.  
- The `map()` method is used to iterate through the objects.  
- A new property, `status`, is added based on age:  
  - If `age >= 18`, the user is **Eligible**.  
  - Otherwise, the user is **Not Eligible**.  
- The modified array is displayed in a table format.  

### **Key Takeaways**  
- The `map()` method transforms each element in an array without modifying the original array.  
- It is useful for performing calculations and adding new properties to objects efficiently.

---------------------------------------------------------------------------------------

# 45_More Examples Map Method

## Overview
The `map()` method in JavaScript is used to create a new array by applying a function to each element of an existing array. It is commonly used for data transformation, object manipulation, and array modifications.

## Key Concepts
- **Simple Transformation**: Performs operations on each array element to create a modified array.
- **Modifying Array Elements**: Updates each element in an array, such as changing the case of text.
- **Combining Arrays**: Merges data from multiple arrays into a structured format.
- **Filtering an Array**: Uses `map()` to generate a new array with boolean values indicating conditions.
- **Extracting Properties from Objects**: Retrieves specific properties from an array of objects.
- **Modifying an Array of Objects**: Creates a new array with updated values for object properties.
- **Generating Object Statistics**: Collects and structures data, such as word length, position, and total count.

## Usage
1. Define an array with values or objects.
2. Use the `map()` method to apply a function to each element.
3. Store the transformed array in a new variable.
4. Log or utilize the modified array in further operations.

## Benefits of Using `map()`
- **Immutability**: Does not modify the original array.
- **Readability**: Provides a clear and concise way to manipulate arrays.
- **Efficiency**: Enhances performance when working with large datasets.

---------------------------------------------------------------------------------------

# 46_Filter in JavaScript 

## Overview  
The `filter()` method in JavaScript is used to create a new array containing elements that satisfy a given condition. It is commonly used for data filtering, object selection, and refining arrays based on specific criteria.  

## Key Concepts  
- **Filtering Numbers**: Extracts even numbers from an array.  
- **Selecting Objects by Property**: Retrieves users above a certain age.  
- **Filtering Words by Length**: Finds words of a specific length.  
- **Categorizing Data**: Filters items based on category (e.g., fruits vs. vegetables).  
- **Filtering by First Letter**: Selects words starting with a specific letter.  
- **Applying Multiple Conditions**: Extracts expensive products based on category and price.  

---------------------------------------------------------------------------------------

# 47_Reduce in JavaScript

- **Purpose:** Transforms an array into a single value or object.
- **Syntax:** `array.reduce((accumulator, currentValue) => {...}, initialValue);`
- **Common Uses:**
  - Summing elements  
  - Flattening arrays  
  - Counting occurrences  
  - Finding the maximum value  
  - Grouping data  

The `reduce()` method simplifies array operations and enhances code readability.

---------------------------------------------------------------------------------------

# 48_Slice in JavaScript

## Overview
The `slice()` method extracts a portion of an array without modifying the original array. It returns a new array containing the selected elements.

---------------------------------------------------------------------------------------

# 49_Splice in JavaScript

## Overview
The `splice()` method is used to remove elements from an array and can also add new elements. It modifies the original array and returns an array of the removed elements.

---------------------------------------------------------------------------------------

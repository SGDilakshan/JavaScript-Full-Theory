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
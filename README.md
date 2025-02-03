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

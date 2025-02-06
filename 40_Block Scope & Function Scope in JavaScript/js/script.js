// Block Scope & Function Scope in JavaScript

// Block Scope

// The 'let' keyword creates variables with block-level scope.
// The variable is only accessible inside the block (the 'if' statement here).
if (true) {
    let blockScopeVariable = "I am a variable with block scope";
    console.log("Good"); // Logs "Good"
    console.log(blockScopeVariable); // Logs the value of blockScopeVariable: "I am a variable with block scope"
}

// Uncommenting the following line would result in an error because blockScopeVariable is not accessible outside the block.
// console.log(blockScopeVariable); // Error: blockScopeVariable is not defined outside the block

// Function Scope

// The 'var' keyword creates variables with function-level scope.
// The variable is only accessible within the function where it's defined.
function myFunction() {
    var functionScopeVariable = "I am a variable with function scope";
    console.log(functionScopeVariable); // Logs the value of functionScopeVariable: "I am a variable with function scope"

    // Nested function inside myFunction
    function add() {
        // The add function has access to functionScopeVariable from its parent scope (myFunction).
        console.log(functionScopeVariable); // Logs the value of functionScopeVariable: "I am a variable with function scope"
    }

    // Calling the nested function
    add();
}

// Calling the function that demonstrates function scope
myFunction();

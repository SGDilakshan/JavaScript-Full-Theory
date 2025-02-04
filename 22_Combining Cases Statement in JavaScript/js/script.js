// Combining Cases Statement in JavaScript

/*
In a switch statement, multiple cases can be combined when they share the same execution code.
This helps in reducing redundancy and makes the code more readable.
*/

// Example: Checking if a letter is a vowel or not
let letter = 'a';

switch(letter) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
        console.log(letter + " is a vowel"); // Executes if letter is a vowel
        break;
    default:
        console.log(letter + " is not a vowel"); // Executes if letter is not a vowel
        break;
}

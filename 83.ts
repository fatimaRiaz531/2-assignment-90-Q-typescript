
// Question 83: Converting to Upper and Lower Case: Create a function that takes a string, 
// converts it to uppercase, then to lowercase, and logs both.
// Explain & TIP: The .toUpperCase() and .toLowerCase() methods allow you to change the case of 
// all letters in a string, useful for formatting or comparing strings.

// SOLUTION:

// // This function changes a string to uppercase and then to lowercase
function convertCase(str:string) {
    let upperStr = str.toLocaleUpperCase();
    let lowerStr = str.toLowerCase();
    console.log("Uppercase:" ,upperStr , "Lowercase:", lowerStr);
} // Example: Changing the case of "Hello World"
convertCase("Hello World");

// Question 89: Converting Strings to Numbers: Create a function that takes a string representing a number 
// (like "123") and converts it into an actual number type.
// Explain & TIP: parseInt() for whole numbers or parseFloat() for decimals are handy for turning number-like 
// strings into real numbers, allowing you to perform mathematical operations on them.

// SOLUTION:
// This function changes a string into a number
function convertintonumber(str:string): number {
    return parseFloat(str); // converts the string to a number
}
// Example: Turning a numeric string into a real number
console.log(convertintonumber("123"));
console.log(convertintonumber("58"));

// Question 90: Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN 
// (Not a Number) and return a boolean result.
// Explain & TIP: isNaN() helps you figure out if something that's supposed to be a number didn't turn 
// out to be a number. It's useful for validating inputs or results of calculations.
// SOLUTION:
function isValueNaN(value) {
    return isNaN(value);
}
// Examples: Checking different values
console.log(isValueNaN("hello world"));
console.log(isValueNaN(17677));
export {};

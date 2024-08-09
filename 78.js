// Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations 
// by creating one ofeach that performs the same task, such as squaring a number.
// Explain & TIP: JavaScript allows you to create functions in two ways: declarations that name the function 
// and can be called before they're defined, and expressions that are stored in variables and are called using
//  the variable name.
// SOLUTION:
// Function declaration for squaring a number
function squareDeclaration(number) {
    return number * number;
}
;
// // Function expression for squaring a number
const squareExpression = function (number) {
    return number * number;
};
console.log(squareDeclaration(6));
console.log(squareExpression(6));
export {};


// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle 
// and refactor it into an arrow function.

// solution:

// Original function for calculating the area of rectangle 
function calculateArea( width: number, height : number) : number {
    return width* height;
}
// Refactored into an arrow function
let calculateAreaArrow =( width: number, height: number): number => width * height;
    // Example usage of the arrow function
console.log(calculateAreaArrow(4,9)); // logs the area of the rectangle
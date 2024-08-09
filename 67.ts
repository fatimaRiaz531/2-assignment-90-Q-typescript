
// 🚀 Day 23 Challenge: Start Coding! 🚀

// Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a 
// string that represents a number (e.g., "5"). Return their sum as a number. 
// Explain & TIP: JavaScript allows arithmetic operations between mixed types. When you add a number to a 
// string that looks like a number, JavaScript converts the string to a number for the operation.

// solution:
// This function adds a number and a string that represents a number
function addNumberAndString(num1:number, numberString: string): number {
      return num1+ Number( numberString);
}
console.log(addNumberAndString(10,"5")); // shows 15
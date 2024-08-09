

// 55.Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a 
// new list where each number is twice its original value.

// solution1:

//start with a list of numbers
let number=[ 1,2,3,4,5,6,7,8,9];
// doubles  each number
let doubledNumber = number.map(number => number * 2);
// shows the new list of doubled numbers
console.log(doubledNumber); //output [2,4,6,8,10,12,14,16,18]

// solution 2:

let numbers=[ 5,6,9];
let doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers);

// Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs 
// all of its properties and values.
// Explain & TIP: You can loop through each property of an object using a for...in loop. This is useful
//  for when you need to examine or display all the information an object holds.
// SOLUTION:    
//  // This function shows every detail about an object
function logObjectProperties(obj) {
    for (let property in obj) {
        // Loops through each property in the object
        console.log(`${property} "${obj[property]}`);
    }
} // Using the function with a car object
logObjectProperties({ make: "Toyota", model: "Carolla", year: 2021, color: "white" });
export {};

// 🚀 Day 29 Challenge: Start Coding! 🚀
// Question 85: Finding the Position of a Substring:
//  Write a function that locates the first occurrence of the word "code" within any given string 
//  and returns its position.
// Explain & TIP: Use .indexOf() to find where a certain piece of text starts within a larger string. 
// If the text isn't found, this method returns -1.
// SOLUTION:
// This function finds where "code" first shows up in a text
function findCodePosition(str) {
    return str.indexOf("code");
}
// Example: Searching within a sentence
console.log(findCodePosition("Learn to code with Jawascript"));
export {};
// It tells us the position number where "code" starts.

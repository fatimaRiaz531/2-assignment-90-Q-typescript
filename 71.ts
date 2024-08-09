
// Question 71: Compare let and const: Create two examples where let allows reassignment but const does not.
// Try to reassign a const-declared variable and catch the error.
// Explain & TIP: let allows you to declare variables that can be reassigned, while const is for variables that 
// should not change once set. Using const helps make your code safer and more predictable.

// solution:

// Using `let` for a variable that can be reassigned
let age = 25;
age = 26;  // works fine because `let` allows reassignment
console.log(age); //shows 26
// Trying to reassign a `const`-declared variable
const names:string ="Fatima";
try{
    name : "Ahsan"; // this line will cause an error
} catch (error){
    console.log("Error: Can't reassign a `const`-declared variable.");  // this message is shown
}

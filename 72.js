// Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} 
// that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
// Explain & TIP: Block scope, created by {} in JavaScript, confines let and const variables to that block, 
// enhancing code organization and preventing accidental access from outside the block.
// solution:
// Demonstrating block scope
{
    let blockLet = "Visible insight the block";
    const blockConst = "also only in insight the block";
    console.log(blockLet); //works fine here
    console.log(blockConst); //also work
}
try {
    console.log(blockLet); // This will fail
}
catch (error) {
    console.log("`blockLet` is not accessible outside the block.");
}
try {
    console.log(blockConst); // this will also fail
}
catch (error) {
    console.log("`blockConst` is not accessible outside the block.");
}
export {};
// This shows that const and let both are variable safe insight the block why they're defined


// Question 75: Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations
//  (addition, subtraction, multiplication, division) on x using compound operators.
// Explain & TIP: Compound assignment operators combine an arithmetic operation with assignment, making your 
// code cleaner and more concise. Instead of writing x = x + 2,you can simply write x += 2.

// SOLUTION:
// This function uses compound assignment operators for different operations
function useCompoundOperators() {
    let x = 6; // starts with x = 6
    console.log("inital x :", x);
    x+= 2; // adds 2 in x
    console.log("after addition :", x );
    x-=1;
    console.log("after subtraction:", x);
    x*= 3;
    console.log("after multiplication:", x);
    x/= 2;
    console.log("after division:", x);
}
useCompoundOperators();
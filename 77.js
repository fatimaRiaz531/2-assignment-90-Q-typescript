// Question 77: Default Parameters: Write a function that greets a user. It should take the user's name as a
//  parameter and say hello. If no name is given,it should greet an anonymous user.
// Explain & TIP: Default parameters allow your functions to have preset values for their parameters. 
// These values are used if no other value is provided, making functions more flexible.
// SOLUTION:
// This function greets a user by name, or greets an anonymous user if no name is provided
function greetUser(name = "anonymous") {
    // Says hello to the given name or to an anonymous user
    console.log(`Hello, ${name}!`);
}
// Trying the function with a name and without
greetUser("Alia");
greetUser();
export {};

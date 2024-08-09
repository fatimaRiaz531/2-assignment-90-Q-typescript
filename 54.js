// Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change 
// the name of each section based on what you need at that moment, like adjusting labels based on user choices.
// solution:
function createObjectWithDynamicKey(key, value) {
    let dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
let userPreference = createObjectWithDynamicKey("theme", "light");
console.log(userPreference);
export {};

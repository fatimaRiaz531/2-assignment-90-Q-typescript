// 56 Question: Keep Only Strings: Given a mix of different types of items, make a new list 
// that has only the words.

//solution:.

// A mixed bag of items
let mixedArray =[4, "orange", 9,"kite", false, "ball"];
// picks out only the words
let stringArray = mixedArray.filter(item => typeof item === "string");
console.log(stringArray);
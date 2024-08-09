// // 59.Add a Special Number: Make a program that creates custom adders. These adders can add a specific number
// //  to any other number you give them later.
// solution:
function makeAdder(valueToAdd) {
    // this is the magic box .it takes a number and adds your special number to it
    return function (number) {
        return number + valueToAdd;
    };
}
;
let addFour = makeAdder(4);
console.log(addFour(8));
export {};

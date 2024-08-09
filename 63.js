// Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a 
// special type alias, including properties unique to each shape.
// Explain & TIP: A type alias lets you create a custom type. It's like a shortcut for describing more 
// complex information, such as the details of different shapes.
// Describing a circle using our Shape type
let circle = {
    kind: "circle ",
    radius: 6
};
// Describing a rectangle using our Shape type
let rectangle = {
    kind: " rectangle",
    width: 12,
    height: 6
};
// showing what we described
console.log(circle); // here's the circle
console.log(rectangle); // here's the rectangle
export {};
// We made a flexible program that can describe different shapes in detail.

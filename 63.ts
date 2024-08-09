// Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a 
// special type alias, including properties unique to each shape.
// Explain & TIP: A type alias lets you create a custom type. It's like a shortcut for describing more 
// complex information, such as the details of different shapes.

//  solution:
// // Creating a custom type (type alias) for shapes that could be circles or rectangles
type shapes= {
    kind: "circle "| " rectangle";
    radius?: number; //only for circle
    width?: number; //only for rectangle
    height?: number; //only for rectangle
};
// Describing a circle using our Shape type
let circle: shapes ={
    kind: "circle ",
    radius: 6
};
// Describing a rectangle using our Shape type
let rectangle: shapes={
    kind: " rectangle",
    width: 12,
    height: 6
};
// showing what we described
console.log(circle);// here's the circle
console.log(rectangle);// here's the rectangle
// We made a flexible program that can describe different shapes in detail.


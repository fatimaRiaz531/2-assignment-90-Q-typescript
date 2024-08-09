// 62. Making a Student Template: Create a blueprint for student information, including their name, age, 
// and the classes they're taking, and then fill in this blueprint with an example student.

// Explain & TIP: This blueprint, called an interface, helps ensure all students have the same kind of 
// information, making your code more organized.

// solution:

// creating a blueprint ( interface) for student information

interface students  {
     name: string;
     age: number;
     courses: string[];
};

//  Filling in the blueprint with an example student
let student ={
    name: "Aisha",
    age : 19,
    courses:[ "Arts",'Computer',"Science"]
};

console.log(student);
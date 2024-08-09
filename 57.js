// 57.Question : Find the Average Grade: Given a list of grades, calculate the average grade.
// solution:
let grades = [88, 99, 92, 36, 59];
// calculate the average grades
let averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length;
console.log(averageGrade);
export {};

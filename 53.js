// 53 Question: Pulling Apart a Nested Object: Imagine you have 
// a list inside another list that shows what a computer programmer knows, like coding languages,
//  tools, and software frameworks. Find a way to get three specific skills from this list and show them.
//solution:
// A list showing a programmer's skills in detail
let developerSkills = {
    languages: ["JawaScript", "TypeScript", "Python"],
    frameworks: [" React", "Angular", " Vue"],
    tools: ["Git", "Webpack", "Docker"]
};
// getting specific skills from the list
let { languages, frameworks, tools } = developerSkills;
//  showing a skill from each categary
console.log(`Language: ${languages[0]}, Framework :${frameworks[0]}, Tool: ${tools[0]}`);
export {};

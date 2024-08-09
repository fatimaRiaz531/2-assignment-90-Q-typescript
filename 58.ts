// DAY 20

// 58.Average Score Calculator: Write a simple program that can take lots of scores and find their average.

// Explain & TIP: This program can handle any number of scores you give it, and it tells you the average 
// score. Handy for seeing how well you did overall!

// solution:

// this program calculate the average of all scores given
function averageScore( ...scores:number[] ): number {
    // adds all scores together and divided by the number  of scores
    let total = scores.reduce((sum,score) => sum + score,0) ;
    return total / scores.length;
} 
console.log(averageScore(100,78,93,55));
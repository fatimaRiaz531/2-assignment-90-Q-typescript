// 48. laptop objects
let priceSet1 = [35000, 40000, 45000];
let priceSet2 = [38000, 47000, 55000];
let combinedPrices = [...priceSet1, ...priceSet2].sort((a, b) => a - b);
console.log(combinedPrices);
export {};


const prices = [7, 1, 5, 3, 5, 4];

let smallestNum = Math.min(...prices);
let biggestNum = Math.max(...prices);

let buyDate = prices.indexOf(smallestNum);
let sellDate = prices.indexOf(biggestNum);

console.log(`Buy at Day ${buyDate + 1}`);
console.log(`Sell at Day ${sellDate + 1}`);
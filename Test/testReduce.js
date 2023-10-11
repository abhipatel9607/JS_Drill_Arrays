const { reduce, add } = require("../Problem/reduce");

const items = [1, 2, 3, 4, 5, 5];
const startingValue = 10;

let result = reduce(items, add, startingValue);
console.log(result);

// Expected Output for this test case
// 30

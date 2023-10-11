const { filter, filterOddNumbers } = require("../Problem/filter");

const items = [1, 2, 3, 4, 5, 5];

let result = filter(items, filterOddNumbers);
console.log(result);

// Expected Output for this test case
// [2,4]

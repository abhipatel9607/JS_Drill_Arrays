const { map, getSquare } = require("../Problem/map");

const items = [1, 2, 3, 4, 5, 5];

let result = map(items, getSquare);
console.log(result);

// Expected Output for this test case
// [ 1, 4, 9, 16, 25, 25 ]

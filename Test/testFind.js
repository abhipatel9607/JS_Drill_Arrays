const { find, callBack } = require("../Problem/find");

const items = [1, 2, 3, 4, 5, 5];
const findElement = 4;

let result = find(items, callBack, findElement);
console.log(result);

// Expected Output for this test case
// true

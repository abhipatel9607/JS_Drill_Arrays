const { eachFunction, callBack } = require("../Problem/each");

const items = [1, 2, 3, 4, 5, 5];

eachFunction(items, callBack);

// Expected Output for this test case
// Element at index 0 is 1
// Element at index 1 is 2
// Element at index 2 is 3
// Element at index 3 is 4
// Element at index 4 is 5
// Element at index 5 is 5

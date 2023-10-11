const flatten = require("../Problem/flat");

const nestedArray = [1, [2], [[3]], [[[4]]]]; // use this to test 'flatten'

let result = flatten(nestedArray);
console.log(result);

// Expected Output for this test case
// [1, 2, 3, 4]

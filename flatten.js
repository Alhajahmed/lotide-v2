const assertArraysEqual = require("./assertArraysEqual");

// This function takes an array as a parameter and returns a new array with all nested arrays flattened.
const flatten = function (array) {
  const flattened = [];
  for (const ele of array) {
    // If the current element is an array, loop over its elements and push them to the flattened array
    if (Array.isArray(ele)) {
      for (const nestedEle of ele) {
        flattened.push(nestedEle);
      }
    } else {
      flattened.push(ele);
    }
  }
  return flattened;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

module.exports = flatten;

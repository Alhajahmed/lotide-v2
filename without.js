const assertArraysEqual = require("./assertArraysEqual");

// This function takes an array and returns a new array with all elements except those in a second array.
const without = function (source, itemsToRemove) {
  const result = [];
  for (const element of source) {
    if (!itemsToRemove.includes(element)) {
      result.push(element);
    }
  }
  return result;
};

// Test assertions
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // should return [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // should return ["1", "2"]
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]); // should return [1, 2, 3]
assertArraysEqual(without([], [1, 2, 3]), []); // should return []
assertArraysEqual(without([1, 2, 3, 4], [2, 4]), [1, 3]); // should return [1, 3]
assertArraysEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), [
  "hello",
  "world",
]); // should return ["hello", "world"]

// Ensure that the original array is not modified
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // should return ["hello", "world", "lighthouse"]

module.exports = without;

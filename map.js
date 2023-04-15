const assertArraysEqual = require("./assertArraysEqual");

// This function iterates through an array, applies a callback function to each element, and returns a new array with the results.
const words = ["ground", "control", "to", "major", "tom"];
const map = function (array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (x) => x[0]);

// 1st test:
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

// 2nd test:
const numbers = [1, 2, 3, 4, 5];
const double = (num) => num * 2;
const results2 = map(numbers, double);

assertArraysEqual(results2, [2, 4, 6, 8, 10]);

// 3rd test:
const objects = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
const getName = (obj) => obj.name;
const results3 = map(objects, getName);

assertArraysEqual(results3, ["Alice", "Bob", "Charlie"]);

module.exports = map;

const assertArraysEqual = function (firstArray, secArray) {
  if (eqArrays(firstArray, secArray)) {
    console.log(`✅ ✅ ✅ Assertion Passed: [${firstArray}] === [${secArray}]`);
  } else {
    console.log(`❗❗❗ Assertion Failed: [${firstArray}] !== [${secArray}]`);
  }
};

const eqArrays = function (firstArray, secArray) {
  if (firstArray.length !== secArray.length) {
    return false;
  }
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secArray[i]) {
      return false;
    }
  }
  return true;
};

const words = ["ground", "control", "to", "major", "tom"];
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
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

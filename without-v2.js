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

const without = function (source, itemsToRemove) {
  const result = [];
  for (let element of source) {
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

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

// Test assertions
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);

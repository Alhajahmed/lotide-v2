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

const flatten = function (array) {
  const flattened = [];
  for (let ele of array) {
    if (Array.isArray(ele)) {
      for (let nestedEle of ele) {
        flattened.push(nestedEle);
      }
    } else {
      flattened.push(ele);
    }
  }
  return flattened;
};

// Test assertions
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

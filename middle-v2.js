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

const middle = function (array) {
  const middleElements = [];
  middleIndex = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return middleElements;
  } else if (array.length % 2 !== 0) {
    middleElements.push(array[middleIndex]);
  } else {
    middleElements.push(array[middleIndex - 1], array[middleIndex]);
  }
  return middleElements;
};

// Test assertions
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

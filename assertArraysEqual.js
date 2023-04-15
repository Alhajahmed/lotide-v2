const eqArrays = require("./eqArrays");

// Defining the assertArraysEqual function that takes two arrays as input
const assertArraysEqual = function (firstArray, secArray) {
  if (eqArrays(firstArray, secArray)) {
    console.log(`✅ Assertion Passed: [${firstArray}] === [${secArray}]`);
  } else {
    console.log(`❌ Assertion Failed: [${firstArray}] !== [${secArray}]`);
  }
};

module.exports = assertArraysEqual;

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(` ❗❗❗ Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

const tail = function (array) {
  if (array.length === 0) {
    return [];
  } else {
    return array.slice(1);
  }
};

// Test assertions
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
// Test Case: Check the returned array for an array with only one element
const resultOne = tail(["Hello"]);
assertEqual(resultOne.length, 0); // expected output: []

// Test Case: Check the returned array for an empty array
const resultEmpty = tail([]);
assertEqual(resultEmpty.length, 0); // expected output: []

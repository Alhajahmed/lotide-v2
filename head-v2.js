const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(` ❗❗❗ Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

const head = function (array) {
  if (array.length === 0) {
    return undefined;
  } else {
    return array[0];
  }
};

// Test assertions
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([8]), 8);
assertEqual(head([]), undefined);

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(` ❗❗❗ Assertion Passed: ${actual} !== ${expected}`);
    return false;
  }
};

// testing our code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

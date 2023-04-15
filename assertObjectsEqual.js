// Inspect used to print objects in a readable format
const inspect = require("util").inspect;
const eqObjects = require("./eqObjects");

// Defining the assertObjectsEqual function that takes two objects as input
const assertObjectsEqual = function (actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(
      `✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};
const object1 = { name: "Ahmed", age: 32 };
const object2 = { name: "Ahmed", age: 32 };

assertObjectsEqual(object1, object2);

module.exports = assertObjectsEqual;

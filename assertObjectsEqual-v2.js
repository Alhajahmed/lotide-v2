const inspect = require("util").inspect;
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

const eqObjects = function (object1, object2) {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  for (let key of obj1Keys) {
    const val1 = object1[key];
    const val2 = object2[key];
    if (Array.isArray(val1) && Array.isArray(val2)) {
      if (!eqArrays(val1, val2)) {
        return false;
      }
    } else if (val1 !== val2) {
      return false;
    }
  }
  return true;
};
const object1 = { name: "Ahmed", age: 32 };
const object2 = { name: "Ahmed", age: 32 };
assertObjectsEqual(object1, object2);

module.exports = eqObjects;

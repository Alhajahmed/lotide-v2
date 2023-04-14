const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

const findKeyByValue = function (obj, value) {
  for (let key of Object.keys(obj)) {
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;

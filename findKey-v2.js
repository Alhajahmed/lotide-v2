const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

const findKey = (obj, callback) => {
  for (const key of Object.keys(obj)) {
    if (callback(obj[key])) {
      return key;
    }
  }
  return undefined;
};

const result1 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 1
);
assertEqual(result1, "Blue Hill");

result2 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 4
);
assertEqual(result2, undefined);

// const findKey = (obj, callback) => {
//   for (const key in obj) {
//     if (callback(obj[key])) {
//       return key;
//     }
//   }
//   return undefined;
// };

module.exports = findKey;

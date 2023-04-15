const assertEqual = require("./assertEqual");

// This function takes an object and a callback function as parameters and returns the first key that has a value that meets the callback function's condition
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

const result2 = findKey(
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

assertEqual(result1, "Blue Hill");
assertEqual(result2, undefined);

module.exports = findKey;

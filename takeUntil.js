const assertArraysEqual = require("./assertArraysEqual");

// This function returns a new array that includes all the elements until the element that meets the condition.
const takeUntil = function (array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array.slice(0, i);
    }
  }
  return array.slice();
};

const nummers = [1, 2, 3, 4, 5, 6, 7];
const result = takeUntil(nummers, (x) => x === 4);

assertArraysEqual(result, [1, 2, 3]);

module.exports = takeUntil;

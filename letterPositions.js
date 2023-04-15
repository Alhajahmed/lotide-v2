const assertArraysEqual = require("./assertArraysEqual");

// A function that takes a sentence and returns an object that maps each letter in the sentence to an array of its positions (indices)
const letterPositions = function (sentence) {
  const result = {};
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    if (char !== " ") {
      if (!result[char]) {
        result[char] = [i];
      } else {
        result[char].push(i);
      }
    }
  }
  return result;
};

const result = letterPositions("he llo");
assertArraysEqual(result["h"], [0]);
assertArraysEqual(result["e"], [1]);
assertArraysEqual(result["l"], [3, 4]);
assertArraysEqual(result["o"], [5]);

module.exports = letterPositions;

const assertEqual = require("./assertEqual");

// Defining the countLetters function that takes a string as input
const countLetters = function (sentence) {
  const letterCounts = {};
  const letters = sentence.split(" ").join("");
  // Looping through each letter in the string
  for (const letter of letters) {
    if (letterCounts[letter]) {
      letterCounts[letter]++;
    } else {
      letterCounts[letter] = 1;
    }
  }
  return letterCounts;
};

assertEqual(countLetters("lighthouse labs").l, 2);

module.exports = countLetters;

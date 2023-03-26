const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(` ❗❗❗ Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

const countLetters = function (sentence) {
  const letterCounts = {};
  const letters = sentence.split(" ").join("");
  for (let letter of letters) {
    if (letterCounts[letter]) {
      letterCounts[letter]++;
    } else {
      letterCounts[letter] = 1;
    }
  }
  return letterCounts;
};
assertEqual(countLetters("lighthouse labs").l, 2);
// assertEqual(countLetters("lighthouse labs"), {
//   l: 2,
//   i: 1,
//   g: 1,
//   h: 2,
//   t: 1,
//   o: 1,
//   u: 1,
//   s: 2,
//   e: 1,
//   a: 1,
//   b: 1,
// });

const assertEqualObj = function (actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(
      `✅ ✅ ✅ Assertion Passed: ${JSON.stringify(
        actual
      )} === ${JSON.stringify(expected)}`
    );
    return true;
  } else {
    console.log(
      ` ❗❗❗ Assertion Failed: ${JSON.stringify(actual)} !== ${JSON.stringify(
        expected
      )}`
    );
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
  console.log(letterCounts);
  return letterCounts;
};

assertEqualObj(countLetters("lighthouse labs"), {
  l: 2,
  i: 1,
  g: 1,
  h: 2,
  t: 1,
  o: 1,
  u: 1,
  s: 2,
  e: 1,
  a: 1,
  b: 1,
});

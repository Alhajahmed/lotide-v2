const assert = require("chai").assert;
const tail = require("../tail-v2");

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs",
    ]);
  });
  it("returns an array with length 2 for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
  });
  it("returns an array with length 0 for ['Hello']", () => {
    assert.strictEqual(tail(["Hello"]).length, 0);
  });
});

// const assertEqual = require("../assertEqual-v2");
// const tail = require("../tail-v2");

// // Test assertions
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// // Test Case: Check the returned array for an array with only one element
// const resultOne = tail(["Hello"]);
// assertEqual(resultOne.length, 0); // expected output: []

// // Test Case: Check the returned array for an empty array
// const resultEmpty = tail([]);
// assertEqual(resultEmpty.length, 0); // expected output: []

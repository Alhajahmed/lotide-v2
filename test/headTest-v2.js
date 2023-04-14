const assert = require("chai").assert;
const head = require("../head-v2");

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(["5"]), "5");
  });
  it("returns '5' for ['5', '6', '7']", () => {
    assert.strictEqual(head(["5", "6", "7"]), "5");
  });
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  it("returns '8' for ['8']", () => {
    assert.strictEqual(head(["8"]), "8");
  });
  it("returns 'undefined' for []", () => {
    assert.strictEqual(head([]), undefined);
  });
});

// const assertEqual = require("../assertEqual-v2");
// const head = require("../head-v2");

// // Test assertions
// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([8]), 8);
// assertEqual(head([]), undefined);

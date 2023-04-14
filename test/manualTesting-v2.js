// Manual testing (for reference purpose)

// const assertEqual = require("../assertEqual-v2");
// const head = require("../head-v2");

// // Test assertions
// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([8]), 8);
// assertEqual(head([]), undefined);

// // ----------------------------------------------------------------------------

// const assertArraysEqual = require("../assertArraysEqual-v2");
// const middle = require("../middle-v2");

// // Test assertions
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

// // -----------------------------------------------------------------------------

// // const assertEqual = require("../assertEqual-v2");
// // const tail = require("../tail-v2");

// // // Test assertions
// // const result = tail(["Hello", "Lighthouse", "Labs"]);
// // assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// // const words = ["Yo Yo", "Lighthouse", "Labs"];
// // tail(words); // no need to capture the return value since we are not checking it
// // assertEqual(words.length, 3); // original array should still have 3 elements!

// // // Test Case: Check the returned array for an array with only one element
// // const resultOne = tail(["Hello"]);
// // assertEqual(resultOne.length, 0); // expected output: []

// // // Test Case: Check the returned array for an empty array
// // const resultEmpty = tail([]);
// // assertEqual(resultEmpty.length, 0); // expected output: []

const assertEqual = require("../assertEqual-v2");
const tail = require("../tail-v2");

// Test assertions
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case: Check the returned array for an array with only one element
const resultOne = tail(["Hello"]);
assertEqual(resultOne.length, 0); // expected output: []

// Test Case: Check the returned array for an empty array
const resultEmpty = tail([]);
assertEqual(resultEmpty.length, 0); // expected output: []

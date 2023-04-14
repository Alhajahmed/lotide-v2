const assertEqual = require("../assertEqual-v2");
const head = require("../head-v2");

// Test assertions
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([8]), 8);
assertEqual(head([]), undefined);

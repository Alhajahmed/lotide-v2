# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @alhajahmed/lotide-v2`

**Require it:**

`const _ = require('@alhajahmed/lotide-v2');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- **head:** returns the first element of an array.

- **tail:** returns a new array containing all the elements of the input array except the first one.

- **middle:** returns an array containing the middle element(s) of the input array.

- **assertArraysEqual:** checks if two arrays are equal and logs a message to the console.

- **assertEqual:** checks if two primitive values are equal and logs a message to the console.

- **assertObjectsEqual:** checks if two objects are equal and logs a message to the console.

- **eqObjects:** checks if two objects are equal (i.e., have the same keys and values).

- **countLetters:** takes a string as input and returns an object that counts the number of occurrences of each letter in the string.

- **countOnly:** takes an array and an object as input and returns an object that counts the number of occurrences of the keys that are true in the input object.

- **eqArrays:** checks if two arrays are equal (i.e., have the same elements in the same order).

- **findKey:** takes an object and a callback function as input and returns the first key in the object for which the callback function returns a truthy value.

- **findKeyByValue:** takes an object and a value as input and returns the first key in the object that has the given value.

- **flatten:** takes an array as input and returns a flattened version of the array (i.e., an array with no nested arrays).

- **letterPositions:** takes a string as input and returns an object that maps each letter to an array of its positions in the string.

- **map:** takes an array and a callback function as input and returns a new array containing the values returned by the callback function for each element in the input array.

- **takeUntil:** takes an array and a callback function as input and returns a new array containing the elements of the input array up to (but not including) the first element for which the callback function returns a truthy value.

- **without:** takes two arrays as input and returns a new array containing all the elements of the first array that are not present in the second array.

## Examples:

- Tail:

`const arr = [1, 2, 3, 4, 5];
const result = tail(arr);
console.log(result); // [2, 3, 4, 5]`

- assertEqual:

`assertEqual(1 + 1, 2); // should log 'Assertion Passed: 2 === 2'
assertEqual('hello', 'world'); // should log 'Assertion Failed: hello !== world'`

- middle:

`const arr1 = [1, 2, 3];
console.log(middle(arr1)); // output: [2]
const arr2 = [1, 2, 3, 4];
console.log(middle(arr2)); // output: [2, 3]`

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

```
const head = function (array) {
  if (array.length === 0) {
    return undefined;
  } else {
    return array[0];
  }
};
```

- **tail:** returns a new array containing all the elements of the input array except the first one.

```
const tail = function (array) {
  if (array.length === 0) {
    return [];
  } else {
    return array.slice(1);
  }
};
```

- **middle:** returns an array containing the middle element(s) of the input array.

```
const middle = function (array) {
  const middleElements = [];
  middleIndex = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return middleElements;
  } else if (array.length % 2 !== 0) {
    middleElements.push(array[middleIndex]);
  } else {
    middleElements.push(array[middleIndex - 1], array[middleIndex]);
  }
  return middleElements;
};
```

- **assertArraysEqual:** checks if two arrays are equal and logs a message to the console.

```
const assertArraysEqual = function (firstArray, secArray) {
  if (eqArrays(firstArray, secArray)) {
    console.log(`✅ Assertion Passed: [${firstArray}] === [${secArray}]`);
  } else {
    console.log(`❌ Assertion Failed: [${firstArray}] !== [${secArray}]`);
  }
};
```

- **assertEqual:** checks if two primitive values are equal and logs a message to the console.

```
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};
```

- **assertObjectsEqual:** checks if two objects are equal and logs a message to the console.

```
const inspect = require("util").inspect;
const assertObjectsEqual = function (actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(
      `✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};
```

- **eqObjects:** checks if two objects are equal (i.e., have the same keys and values).

```
const eqObjects = function (object1, object2) {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  for (let key of obj1Keys) {
    const val1 = object1[key];
    const val2 = object2[key];
    if (Array.isArray(val1) && Array.isArray(val2)) {
      if (!eqArrays(val1, val2)) {
        return false;
      }
    } else if (val1 !== val2) {
      return false;
    }
  }
  return true;
};
```

- **countLetters:** takes a string as input and returns an object that counts the number of occurrences of each letter in the string.

```
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
```

- **countOnly:** takes an array and an object as input and returns an object that counts the number of occurrences of the keys that are true in the input object.

```
onst countOnly = function (allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item]++;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};
```

- **eqArrays:** checks if two arrays are equal (i.e., have the same elements in the same order).

```
const eqArrays = function (firstArray, secArray) {
  if (firstArray.length !== secArray.length) {
    return false;
  }
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secArray[i]) {
      return false;
    }
  }
  return true;
};
```

- **findKey:** takes an object and a callback function as input and returns the first key in the object for which the callback function returns a truthy value.

```
const findKey = (obj, callback) => {
  for (const key of Object.keys(obj)) {
    if (callback(obj[key])) {
      return key;
    }
  }
  return undefined;
};
```

- **findKeyByValue:** takes an object and a value as input and returns the first key in the object that has the given value.

```
const findKeyByValue = function (obj, value) {
  for (let key of Object.keys(obj)) {
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;
};
```

- **flatten:** takes an array as input and returns a flattened version of the array (i.e., an array with no nested arrays).

```
const flatten = function (array) {
  const flattened = [];
  for (let ele of array) {
    if (Array.isArray(ele)) {
      for (let nestedEle of ele) {
        flattened.push(nestedEle);
      }
    } else {
      flattened.push(ele);
    }
  }
  return flattened;
};
```

- **letterPositions:** takes a string as input and returns an object that maps each letter to an array of its positions in the string.

```
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
```

- **map:** takes an array and a callback function as input and returns a new array containing the values returned by the callback function for each element in the input array.

```
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
```

- **takeUntil:** takes an array and a callback function as input and returns a new array containing the elements of the input array up to (but not including) the first element for which the callback function returns a truthy value.

```
const takeUntil = function (array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array.slice(0, i);
    }
  }
  return array.slice();
};
```

- **without:** takes two arrays as input and returns a new array containing all the elements of the first array that are not present in the second array.

```
const without = function (source, itemsToRemove) {
  const result = [];
  for (let element of source) {
    if (!itemsToRemove.includes(element)) {
      result.push(element);
    }
  }
  return result;
};
```

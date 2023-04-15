// The middle function takes an array as an argument and returns an array of the middle elements.
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

module.exports = middle;

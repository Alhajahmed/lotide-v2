// This function takes an array and returns a new array with all the elements except for the first element of the original array.
const tail = function (array) {
  if (array.length === 0) {
    return [];
  } else {
    return array.slice(1);
  }
};

module.exports = tail;

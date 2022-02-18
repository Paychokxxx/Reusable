'use strict';

const rangeOdd = (start, end) => {
  const myArray = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      myArray.push(i);
    }
  }
  return myArray;
};

module.exports = { rangeOdd };

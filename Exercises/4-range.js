'use strict';

const range = (start, end) => {
  const myArray = [];
  for (let i = start; i <= end; i++) {
    myArray.push(i);
  }
  return myArray;
};

module.exports = { range };

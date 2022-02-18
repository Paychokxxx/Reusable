'use strict';

const fn = () => {
  const objOne = {
    name: 'Alexey'
  };

  let objTwo = {
    name: 'Alexey'
  };
  objOne.name = 'newAlexey';
  objTwo.name = 'newAlexey';
  objOne = { name: 'Bob' };
  objTwo = { name: 'Jay' };
};


module.exports = { fn };

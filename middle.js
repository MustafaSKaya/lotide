const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    if (arr1.length >= 1) {
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        } else if (i === arr1.length - 1 && arr1[arr1.length - 1] === arr2[arr2.length - 1]) {
          return true;
        }
      }
    } else {
      return true
    }
  }
};


const middle = function(middleArr) {
  let arr = [];
  let middleElem = Math.floor(middleArr.length / 2);
  if (middleArr.length <= 2) {
    return [];
  } else if (middleArr.length % 2 === 0) {
    arr.push(middleArr[middleElem - 1], middleArr[middleElem]);
  } else if (middleArr.length % 2 === 1) {
    arr.push(middleArr[middleElem]);
  } 
  return arr;
};

module.exports = middle;
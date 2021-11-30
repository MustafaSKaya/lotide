const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

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

const takeUntil = (array, predicate) => {
  let desiredArr = [];
  for (let element of array) {
    if (predicate(element)) {
      return desiredArr;
    } else {
      desiredArr.push(element);
    }
  }
};

const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

/*
[ 1, 2, 5, 7, 2 ]
---
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
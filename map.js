const words = ["ground", "control", "to", "major", "tom"];

const map = function(arr, cbFunc) {
  const firstElemOfWords = [];
  for (let item of arr) {
    firstElemOfWords.push(cbFunc(item));
  }
  return firstElemOfWords;
};

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


console.log(map(words, word => word[0]));
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
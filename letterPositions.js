const letterPositions = function(string) {
  let positionsOfLetters = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      if (positionsOfLetters[string[i]]) {
        positionsOfLetters[string[i]].push(i);
      } else {
        positionsOfLetters[string[i]] = [];
        positionsOfLetters[string[i]].push(i);
      }
    }
  }
  return positionsOfLetters;
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

assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
console.log(letterPositions("lighthouse in the house"));
const without = function (sourceArr, itemsToRemoveArr) {
  let betterArr = sourceArr.concat(itemsToRemoveArr);
  for (let i = 0; i < betterArr.length; i++) {
    if (itemsToRemoveArr.includes(betterArr[i])) {
      betterArr.splice(i, 1);
      i--;
    }
  }
  return betterArr;
};

const assertArraysEqual = function (actual, expected) {
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


console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
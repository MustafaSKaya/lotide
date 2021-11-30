const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
  }
};

const eqObjects = function(obje1, obje2) {
  for (const key of Object.keys(obje1)) {
    if (Array.isArray(obje1[key]) && Array.isArray(obje2[key])) {
      if (!eqArrays(obje1[key], obje2[key])) {
        return false;
      }
    } else if (obje1[key] !== obje2[key]) {
      return false;
    }
  }
  if (Object.keys(obje1).length !== Object.keys(obje2).length) {
    return false;
  }
  return true;
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);
assertObjectsEqual(ab, ba);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);

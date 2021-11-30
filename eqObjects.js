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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), true);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), true);
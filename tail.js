const assertEqual = function(actual, expected) {
  if (actual === undefined && expected === undefined) {
    console.log(undefined);
  } else if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const tail = (value) => {
  let arr = [];
  if (value.length > 1) {
    for (let i = 1; i < value.length; i++) {
      arr.push(value[i]);
    }
  }
  console.log(arr);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);
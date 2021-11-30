/*
const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
assertArraysEqual(tail(words), ["Lighthouse", "Labs"]);
assertArraysEqual([], []);
*/

const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');
const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("(tailTest) if its not an empty array, function should return every element besides the first element", () => {
    it("should return [Lighthouse, Labs] from [Yo Yo, Lighthouse, Labs]", () => {
      assert.strictEqual(assertArraysEqual(tail(words), ["Lighthouse", "Labs"]));
    });
    it("should return [] from []", () => {
      assert.strictEqual(assertArraysEqual([], [])); 
    });
  });
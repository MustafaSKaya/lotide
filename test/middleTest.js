/*
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
*/

const assert = require('chai').assert;
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

describe("(middleTest) function should return the middle element(s) if it has more than two elements", () => {
    it("should return []", () => {
      assert.strictEqual(assertArraysEqual(middle([1]), []));
    });
    it("should return []", () => {
      assert.strictEqual(assertArraysEqual(middle([1, 2]), [])); 
    });
    it("should return [2]", () => {
        assert.strictEqual(assertArraysEqual(middle([1, 2, 3]), [2])); 
    });
    it("should return [3]", () => {
        assert.strictEqual(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])); 
    });
    it("should return [2, 3]", () => {
        assert.strictEqual(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])); 
    });
    it("should return [3, 4]", () => {
        assert.strictEqual(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])); 
      });
  });
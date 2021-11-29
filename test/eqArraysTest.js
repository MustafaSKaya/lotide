/*
const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);
*/

const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

describe("there is two arrays to compare", () => {
    it("should return passed for comparison of [1, 2, 3] and [1, 2, 3]", () => {
      assert.strictEqual(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
    });
    it("should return failed for comparison of [1, 2, 3] and [3, 2, 1]", () => {
      assert.strictEqual(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true))
    });
    it("should return passed for comparison of ['1', '2', '3'] and ['1', '2', '3']", () => {
        assert.strictEqual(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true));
      });
    it("should return failed for comparison of ['1', '2', '3'] and ['1', '2', 3]", () => {
        assert.strictEqual(assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), true))
    });
  });
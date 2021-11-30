/*
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
*/

const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe("(assertArraysEqualTest) there is two arrays to compare", () => {
    it("should return passed for comparison of [8, 4, 3] and [8, 4, 3]", () => {
      assert.strictEqual(assertArraysEqual([8, 4, 3], [8, 4, 3]));
    });
    it("should return failed for comparison of [5, 3, 3] and [3, 2, 1]", () => {
      assert.strictEqual(assertArraysEqual([5, 3, 3], [3, 2, 1]))
    });
    it("should return passed for comparison of ['8', '4', '3'] and ['8', '4', '3']", () => {
        assert.strictEqual(assertArraysEqual(["8", "4", "3"], ["8", "4", "3"]));
    });
    it("should return failed for comparison of ['800', '2', '3'] and ['800', '2', 3]", () => {
        assert.strictEqual(assertArraysEqual(["800", "2", "3"], ["800", "2", 3]))
    });
  });
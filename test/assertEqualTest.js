/*
const assertEqual = require('../assertEqual');

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
*/

const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("(assertEqualTest) if both elements are equal and String/Number", () => {
  it("should return false for comparison of Lighthouse Labs and Bootcamp", () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"));
  });
  it("should return true for comparison of 1 and 1", () => {
    assert.strictEqual(assertEqual(1, 1))
  });
});
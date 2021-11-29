/*
const assertEqual = require('../assertEqual');
const head = require('../head')

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
*/

const assert = require('chai').assert;
const assertEqual = require('../assertEqual')
const head   = require('../head');

describe("if its not an empty array, function should return the first element", () => {
  it("should return 1 for [1, 2, 3]", () => {
    assert.strictEqual(assertEqual(head([5, 6, 7]), 5));
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello")); 
  });
});
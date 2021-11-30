/*
const assertEqual = require('../assertEqual');
const head = require('../head')

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
*/

const assert = require('chai').assert;
const assertEqual = require('../assertEqual')
const head   = require('../head');

describe("(headTest) if its not an empty array, function should return the first element", () => {
  it("should return 5 from [5, 6, 7]", () => {
    assert.strictEqual(assertEqual(head([5, 6, 7]), 5));
  });
  it("returns 'hello' from [Hello, Lighthouse, Labs]", () => {
    assert.strictEqual(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello")); 
  });
  it("returns undefined from []", () => {
    assert.strictEqual(assertEqual(head([]), undefined)); 
  });
});
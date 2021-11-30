# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @m_said_k/lotide`

**Require it:**

`const _ = require('@m_said_k/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArrayEqual(...)`: Compares two arrays and tells if they are equal or not.
* `assertEqual(...)`: Compares two data types(limited to strings and numbers) and tells if they are equal or not.
* `assertObjectsEqual(...)`: Compares two objects and tells if they are equal or not.
* `countLetters(...)`: Count letters and put them in an object with repeat number as their value.
* `countOnly(...)`: Function takes two parameters. First the firstNames array, second an object with names that will help us find how many times the specified name from the object has been repeated in firstNames array.
* `eqArrays(...)`: Compares two arrays.
* `eqObjects(...)`: Compares two objects.
* `findKey(...)`: Function takes two parameters. First an object, second a value from the same object. Once the function finds the key with the desired value it will return the key.
* `findKeyByValue(...)`: Function takes two parameters. First an object, second a value from the same object. Once the function finds the key with the desired value it will return the key.
* `head(...)`: Return first element of the given data type.
* `letterPosition(...)`: The function looks through a string and returns the index number of given letter from the string.  
* `map(...)`: The function loops through the given arrays and return the wanted elements.
* `middle(...)`: The function looks through an array and return element(s) in the middle if array has more than two elements.
* `tail(...)`: Returns the every element besides the first.
* `takeUntil(...)`: Function loops and returns every element until it finds the specified element in the second parameter.
* `without(...)`: Function loops and returns every element besides the one that is specified in second parameter.

## Author

@m_said_k
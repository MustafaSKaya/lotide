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

module.exports = eqArrays;
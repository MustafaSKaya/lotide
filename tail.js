const tail = (value) => {
  let arr = [];
  if (value.length > 1) {
    for (let i = 1; i < value.length; i++) {
      arr.push(value[i]);
    }
  }
  return arr;
};

module.exports = tail;
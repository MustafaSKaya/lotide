const head = function(argumentOne, argumentTwo) {
  if (argumentOne.length >= 1) {
    return argumentOne[0];
  } else if (argumentOne.length === 0) {
    return undefined;
  } else {
    return argumentOne;
  }
};

//console.log(head(['5'], '5'));
 module.exports = head;
// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  const length = cardNumber.length;
  const prefixOneDigit = cardNumber.slice(0, 1);
  const prefixTwoDigit = cardNumber.slice(0, 2);
  if ((prefixTwoDigit === '38' || prefixTwoDigit === '39') && length === 14) {
    return "Diner's Club";
  } else if ((prefixTwoDigit === '34' || prefixTwoDigit === '37') && length === 15) {
    return 'American Express';
  } else if (prefixOneDigit === '4' && (length === 13 || length === 16 || length === 19)){
    return 'Visa';
  } else if ((prefixTwoDigit === '51' || prefixTwoDigit === '52' || prefixTwoDigit === '53' || prefixTwoDigit === '54' || prefixTwoDigit === '55') && length === 16) {
    return 'MasterCard';
  } else {
    return '';
  }

  
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};



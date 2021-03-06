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
  const prefixThreeDigit = cardNumber.slice(0, 3);
  const prefixFourDigit = cardNumber.slice(0, 4);
  const prefixSixDigit = cardNumber.slice(0,6);
  if ((prefixTwoDigit === '38' || prefixTwoDigit === '39') && length === 14) {
    return 'Diner\'s Club';
  } else if ((prefixTwoDigit === '34' || prefixTwoDigit === '37') && length === 15) {
    return 'American Express';
  } else if ((prefixFourDigit === '4903' || prefixFourDigit === '4905' || prefixFourDigit === '4911' || prefixFourDigit === '4936' || prefixSixDigit === '564182' || prefixSixDigit === '633110' || prefixFourDigit === '6333' || prefixFourDigit === '6759') && ( length === 16 || length === 18 || length === 19)) {
    return 'Switch';
  } else if (prefixOneDigit === '4' && (length === 13 || length === 16 || length === 19)){
    return 'Visa';
  } else if ((Number(prefixTwoDigit) >= 51 && Number(prefixTwoDigit) <= 55 ) && length === 16) {
    return 'MasterCard';
  } else if ((prefixFourDigit === '6011' || (Number(prefixThreeDigit) >= 644 && Number(prefixThreeDigit) <= 649) || prefixTwoDigit === '65') && (length === 16 || length === 19)) {
    return 'Discover';
  } else if ((prefixFourDigit === '5018' || prefixFourDigit === '5020' || prefixFourDigit === '5038' || prefixFourDigit === '6304') && (length >= 12 && length <= 19)) {
    return 'Maestro';
  } else if (((Number(prefixSixDigit) >= 622126 && Number(prefixSixDigit) <= 622925) || (Number(prefixThreeDigit) >= 624 && Number(prefixThreeDigit) <= 626) || (Number(prefixFourDigit) >= 6282 && Number(prefixFourDigit) <= 6288)) && (length >= 16 && length <= 19)){
    return 'China UnionPay';
  } else {
    return '';
  }

  
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};



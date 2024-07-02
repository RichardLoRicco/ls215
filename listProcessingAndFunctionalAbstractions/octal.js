/*
Write a Function named octalToDecimal that performs octal to decimal conversion. When invoked on a String 
that contains the representation of an octal number, the Function returns a decimal version of that value 
as a Number. Implement the conversion yourself: do not use something else to perform the conversion for you.

----

INPUT: a string representation of an octal number
RETURN: a decimal version of the the input octal string, as a Number
RULES:
- convert the octal to a decimal (base 8 to base 10)
- return as a Number, not a String
- implement the conversion without using something to assist in the conversion
ALGORITHM:
- split octal into an array of digits
- initialize power to size of array - 1
- map over each digit and return the following:
  - convert digit to number
  - if power isn't equal to size of array - 1:
    - decrement power by 1
  - digit * 8 ^ (power)
- add each element of returned array to each other
*/

function octalToDecimal(numberString) {
  let digits = numberString.split('');
  let power = digits.length;

  let decimalDigits = digits.map(digit => {
    digit = Number(digit);
    power -= 1;

    return digit * (8 ** power);
  });

  return decimalDigits.reduce((sum, num) => sum + num);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9
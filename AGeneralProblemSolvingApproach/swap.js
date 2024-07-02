/*
Write a function called swap that takes a string as an argument, and returns a new string, where the alphabetic characters have taken the place of the numeric characters, and vice versa.

----

INPUT: a string
RETURN: a new string, where the alphabetic chars have taken the place of
        the numeric characters, and vis versa
QUESTIONS:
- will there be the same number of alphabetic chars as numeric chars?
- do I retain the same order (so do all digits stay in their order relative to each
  other, and same for all aphabetic chars)?
- will we always have alphabetic chars and digits?
  - what if we don't?
  - what if we have an empty string?
- what happens if we don't pass in a string? Should we account for this?
- what happens if we don't pass anything in?
- can we pass in an array or other object
- could the string contain uppercase letters?
ANSWERS:
- an argument will always be provided
- a string will always be provided
- if empty string provided, return empty string -> add test case
- if there are fewer letters than numbers, or vis versa, we add the remaining chars in the new string as-is
- other types of chars may be present in the input string
  - add these to the new string as-is
- string can contain uppercase letters
ALGORITHM:
- gather all letter chars and numeric chars into their own arrays
  - create array of all letter chars (upper and lowercase)-> use match 
  - create array of all numeric chars -> use match
- split string into array of chars, transforming the array as follows:
  - if char is a letter, replace with first element of digits array (remove
    that element from the digits array), unless digits array is empty, then 
    return char as is 
  - if char is number, replace with first element of letters array  (remove
    that element from the letters array) unless letters array is empty, then 
    return char as is 
  - otherwise, return the char as is
- join the transformed array with no spaces and return the returned string
*/

 
function swap(str) {
  const letters = str.match(/[a-zA-Z]/g) || [];
  const digits = str.match(/[0-9]/g) || [];
  
  return str.split('').map(char => {
    if ((/[a-zA-Z]/).test(char) && digits.length !== 0) {
      return digits.shift();
    } else if ((/[0-9]/).test(char) && letters.length !== 0) {
      return letters.shift();
    } else {
      return char;
    }
  }).join('');
  }

console.log(swap("1a2b3c") === "a1b2c3"); // true
console.log(swap("abcd123") === "123dabc"); // true
console.log(swap("") === ""); // true
console.log(swap("abc12345") === "123abc45"); // true
console.log(swap("12a") === "a21"); // true
console.log(swap("ab1") === "1ba"); // true
console.log(swap("abcd") === "abcd"); // true
console.log(swap("1") === "1"); // true
console.log(swap("123-4a#b$") === "ab3-41#2$"); // true
console.log(swap("ab1CD23") === "12a3DbC"); // true
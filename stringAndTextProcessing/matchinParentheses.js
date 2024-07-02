/*
Write a function that takes a string as an argument and returns true if the string 
contains properly balanced parentheses, false otherwise. Parentheses are properly 
balanced only when '(' and ')' occur in matching pairs, with each pair starting 
with '('.

---

INPUT: a string
RETURN: true if string contains properly balanced parentheses, false otherwise
RULES:
- parentheses are balanced only when '(' and ')' occur in matching pairs, with
  each pair starting with '('
ALGORITHM:
- initialize balance to 0
- for each char in string (use for loop):
  - if element is '(', increment count by 1
  - if element if ')', decrement count by 1
  - return false if count < 0
- return whether count equals 0?
*/

function isBalanced(string) {
  let count = 0;

  for (let i = 0; i < string.length; i += 1) {
    let char = string[i];
    if (char === '(') {
      count += 1;
    } else if (char === ')') {
      count -= 1;
    }

    if (count < 0) {
      return false;
    }
  }

  return count === 0;
}

// Examples
console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false
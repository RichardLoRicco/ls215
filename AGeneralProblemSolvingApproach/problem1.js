/*
Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages. Other than digits, the number may also contain special character such as spaces, dash, dot, and parentheses that should be ignored.

The rules are as follows:

If the phone number is less than 10 digits, assume that it is a bad number.
If the phone number is 10 digits, assume that it is good.
If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
If the phone number is 11 digits and the first number is not 1, then it is a bad number.
If the phone number is more than 11 digits, assume that it is a bad number.
For bad numbers, just a return a string of 10 0s.

---

INPUT: a string containing digits and special characters
RETURN: the input string, cleaned so that it contains only digits to form a phone number
RULES:
- if a number is a bad number, return string of 10 0s -> `0000000000`
- if number is less than 10 digits, assume it is bad number
- if number is 11 digits:
  - if first number isn't 1, then it is a bad number
  - if first number is 1, remove 1 and use the last 10 digits
- if number more than 11 digits, assume it is a bad number

*/

function cleanPhoneNumber(string) {

}



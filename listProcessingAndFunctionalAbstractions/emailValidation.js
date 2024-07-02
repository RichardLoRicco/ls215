/*
Implement a function that checks whether an email address is valid. An email address has two parts: A "local part" and a "domain part." An @ sign separates the two parts: local-part@domain-part. The local part is the name of the mailbox; this is usually a username. The domain part is the domain name (e.g., gmail.com, yahoo.com.ph, or myCompanyName.com). The domain name contains a server name (sometimes called the mail server name) and a top-level domain (.com, .ph, etc.).

For this practice problem, use the following criteria to determine whether an email address is valid:

There must be one @ sign.
The local part must contain one or more letters (A-Z, a-z) and/or digits (0-9). It may not contain any other characters.
The domain part must contain two or more components with a single dot (.) between each component. Each component must contain one or more letters (A-Z, a-z) only.
To keep things simple, you don't need to check whether the domain part or top-level domain is "real" or "official".

Note: don't use this criteria for real email validation logic in your programs. We are using greatly simplified criteria to let you concentrate on the fundamentals of JavaScript, and not on the specifics of email addresses.

---
INPUT: an email (as a string)
RETURN: true if email valid, false otherwise
RULES:
- email has 2 parts:
  1) local -> name of mailbox (usually username)
  2) domain -> domain name (server name and top-level domain)
  - these two are separate by '@'
- there must be an '@'
- local:
  - must contain one or more letters and/or digits
  - can't contain any other characters
- domain:
  - must contain 2 or more components with a '.' between each
  - each component must contain one or more letters only
ALGORITHM:
- split email by @
  - assign first element to local
  - assign second element to domain
- if local and domain valid, return true (otherwise, return false)
- validate local:
  - check that there is at least 1 letter or digit
  - check that no other chars outside of letters or digits
  - if both, true, otherwise, false
- validate domain:
  - check for '.'
  - split on '.', and check that there is at least 1 letter on each 
    element (and nothing else)
*/

function isValidEmail(email) {
  return /^[a-z0-9]+@([a-z]+\.)+[a-z]+$/i.test(email);
}

// Examples
console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
console.log(isValidEmail('foo@baz.com'));             // returns true
console.log(isValidEmail('foo@baz.ph'));              // returns true
console.log(isValidEmail('HELLO123@baz'));            // returns false
console.log(isValidEmail('foo.bar@baz.to'));          // returns false
console.log(isValidEmail('foo@baz.'));                // returns false
console.log(isValidEmail('foo_bat@baz'));             // returns false
console.log(isValidEmail('foo@bar.a12'));             // returns false
console.log(isValidEmail('foo_bar@baz.com'));         // returns false
console.log(isValidEmail('foo@bar.....com'));         // returns false

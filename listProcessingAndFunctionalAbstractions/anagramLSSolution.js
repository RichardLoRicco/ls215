/*
Write a Function named anagram that takes two arguments: a word and an array of
words. Your function should return an array that contains all the words from the
array argument that are anagrams of the word argument. For example, given the word 
"listen" and an array of candidate words like "enlist", "google", "inlets", and 
"banana", the program should return an array that contains "enlist" and "inlets".

---

INPUT: a word and an array of words
RETURN: an array containing all words from input arr that are anagrams of input word
RULES:
-  anagram is a word formed by rearranging letters of another word
ALGORITHM:
- initialize anagramList to []
- sortedLetters = sorted letters in word
- for each element in list:
  - if sortedLetters = sorted element:
    - add element to anagramList
- return anagramList
*/

function anagram(word, list) {
  return list.filter(candidate => areAnagrams(candidate, word));
}

function areAnagrams(source, target) {
  let sourceLetters = source.split('').sort();
  let targetLetters = target.split('').sort();
  return compareArrays(sourceLetters, targetLetters);
}

function compareArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  return array1.every((letter, index) => letter === array2[index]);
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]

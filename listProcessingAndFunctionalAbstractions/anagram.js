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
  let anagramList = [];
  let sortedWord = sortWord(word);
  
  list.forEach(element => {
    if (sortedWord === sortWord(element)) {
      anagramList.push(element);
    }
  })

  return anagramList;
}

function sortWord(word) {
  return word.split('').sort(compareLetters).join('');
}

function compareLetters(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}


console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]
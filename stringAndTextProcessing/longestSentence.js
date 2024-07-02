/*
Write a program that determines the sentence with the most words in some text. Sentences may end with periods (.), exclamation points (!), or question marks (?). Sentences always begin with a word character. You should treat any sequence of characters that are not spaces or sentence-ending characters, as a word. Log the longest sentence and its word count to the console. Pay attention to the expected output. Note that this problem is about manipulating and processing strings. As such, every detail about the string matters (e.g., case, punctuation, tabs, spaces, etc.).

---

INPUT: a string of sentences
OUTPUT: log the longest sentence and its word count to the console
RULES:
- sentences may end with periods (.), exclamation points (!), or question marks (?)
- sentences always begin with a word character
- treat any sequence of chars that are not spaces or sentences-ending chars as a word
- every detail about the string matters
ALGORITHM:
- METHOD split text into sentences (split on periods, exclamation points, and question marks)
- METHOD iterate over sentences, and split into words (split on spaces)
- initialize longestSentence to ''
- initialize wordCount to 0
- iterate over each sentence and for each sentence:
  - if sentence is longer than longestSentence:
    1) reassign longestSentence to sentence (joined with spaces)
    2) reassign wordCount to length of sentence
- output desired results

- PROBLEM -> Add back puncutation
*/

let longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced. It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';

function longestSentence(text) {
  const sentences = findSentences(text);
  const wordsInSentences = findWordsInSentences(sentences);
  let wordCount = 0;
  let longestSentence = '';

  wordsInSentences.forEach(sentence => {
    if (sentence.length > wordCount) {
      wordCount = sentence.length;
      longestSentence = sentence.join(' ');
    }
  });

  console.log(longestSentence);
  console.log(`The longest sentence has ${wordCount} words.`)
}

function findSentences(text) {
  return text.match(/\w[^.!?]*[.!?]/g);
}

function findWordsInSentences(sentences) {
  return sentences.map(sentence => sentence.split(/\s+/));
}

longestSentence(longText);

// console output
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.

// The longest sentence has 86 words.


// Assuming the last sentence is removed:

longestSentence(longText);
// console output
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.

// The longest sentence has 30 words.
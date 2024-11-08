
// Problem 3:
// Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string).
// The function should return the number of times the word appears in the sentence, ignoring case.
// Use the simple sentence without punctuation as input.

const countWordOccurrences = (sentence: string, word: string): number => {
    const convertWords = sentence.toLowerCase().split(' ')
    return convertWords.filter(w => w === word.toLowerCase()).length;
}
const wordCount = countWordOccurrences("I love typescript", "typescript")
console.log(`the number of times the word appears in the sentence: ${wordCount}`)


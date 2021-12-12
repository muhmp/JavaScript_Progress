/** Used forreturns a new string consisting of the single UTF-16 code unit located at the specified offset into the string */

/** Displaying each words */

const x = "helloworld"
for (i=0; i<x.length; i++){
    console.log(x.charAt(i));
}


/**Another example */
const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// expected output: "The character at index 4 is q"

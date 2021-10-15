/**
 * using test method
 */
 let myString = "Hello, World!";
 let myRegex = /Hello/;
 let result = myRegex.test(myString);// Change this line
 console.log(result); //check


/**
* Match literal strings
*/
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result1 = waldoRegex.test(waldoIsHiding);

/**
* Match literal String with different possibilities
*/
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result2 = petRegex.test(petString);
console.log(result1)


/**
 * Ignore case while matching
 */
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result = fccRegex.test(myString);

/**
* Extract matches
*/
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line

/**
 * Find more than first match
 */
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line

/**
 * Match anything with wildcard
 */
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);


/**
* Match single character with multiple possibilities
*/
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line

/**
 * Match letters of the alphabet
 */
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line

/**
 * Match numbers and alphabet
 */
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

/**
 * Match single characters not specified
 */
 let quoteSample = "3 blind mice.";
 let myRegex = /[^aeiou^0-9]/gi; // Change this line
 let result = quoteSample.match(myRegex); // Change this line

 /**
  * Match characters that occur zero or more
  */
 // Only change code below this line
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line
let result = chewieQuote.match(chewieRegex);


/**
 * Find Characters with Lazy Matching 
 */
 let text = "<h1>Winter is coming</h1>";
 let myRegex = /<.*?>/; // Change this line
 let result = text.match(myRegex);

/**
 *   Find One or More Criminals in a Hunt
*/
let reCriminals = /C+/; // Change this line


/**
 * Match beginning string
 */
 let rickyAndCal = "Cal and Ricky both like racing.";
 let calRegex = /^Cal/; // Change this line
 let result = calRegex.test(rickyAndCal);

/**
 * Match last string
 */
 let caboose = "The last car on a train is the caboose";
 let lastRegex = /caboose$/; // Change this line
 let result = lastRegex.test(caboose);

/**
 * Match letter and numbers
 */
 let quoteSample = "The five boxing wizards jump quickly.";
 let alphabetRegexV2 = /\w/g; // Change this line
 let result = quoteSample.match(alphabetRegexV2).length;

/**
 * Match everything but letters and numbers
 */
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

/**
 * Match all numbers
 */
 let movieName = "2001: A Space Odyssey";
 let numRegex = /\d/g; // Change this line
 let result = movieName.match(numRegex).length;

 /**
  * Match all non numbers
  */
  let movieName = "2001: A Space Odyssey";
  let noNumRegex = /\D/g; // Change this line
  let result = movieName.match(noNumRegex).length;

/**
 * Restrict possible username
 * 
    ^ - start of input
    {[a-z] - first character is a letter
    [a-z]+ - following characters are letters
    \d*$ - input ends with 0 or more digits
    | - or
    ^[a-z] - first character is a letter
    \d\d+ - following characters are 2 or more digits
    $ - end of input}
*/
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|[a-z]\d\d+$/i; // Change this line
let result = userCheck.test(username);

/**
 * Match Whitespace
 */
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);

/**
 * Match non whitespace
 */
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);

/**
 * Specify lower and and upper number of matches
 */
 let ohStr = "Ohhh no";
 let ohRegex = /Oh{3,6}\sno/; // from the 3rd string to 6th counted as the same
 let result = ohRegex.test(ohStr);

/**
 * Specify Only the Lower Number of Matches
 */
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);


/**
 * Specify Exact Number of Matches
 */
 let timStr = "Timmmmber";
 let timRegex = /Tim{4}ber/; // Change this line
 let result = timRegex.test(timStr);

/**
 * check for all none
 */
 let favWord = "favorite";
 let favRegex = /favou?/; // checking for similar word for example: color & colour , favorite & favourite
 let result = favRegex.test(favWord);

/**
 * Check for mixed grouping of character
 */
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/; //when mixed character happened, using .*
let result = myRegex.test(myString); // check the value if the condition is true

/**
 * Reuse pattern using caoture groups
 */
 let repeatNum = "42 42 42";
 let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
 let result = reRegex.test(repeatNum);

 /**
  * Use capture groups to search and replace
  */
  let str = "one two three";
  let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
  let replaceText = "$3 $2 $1"; // Change this line
  let result = str.replace(fixRegex, replaceText);

  /**
   * Remove whitespace from start to the end
   */
   let hello = "   Hello, World!  ";
   let wsRegex = /^\s+|\s+$/g; // Change this line
   let result = hello.replace(wsRegex,""); // Change this line


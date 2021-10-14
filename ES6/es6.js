//using let keyword
let catName;
let quote;
//function
function catTalk(){
    "use strict";
    catName = "Meow";
    quote = catName + "says Meow!";
}

console.log(catTalk(quote));


//let:  limited to that block, statement, or expression.
function checkScope() {
    let i = 'function scope';
    if (true) {
      i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return 'function scope';
  }
  

//using const
//const CAPITAL LETTER
function printManyTimes(str){
    const SENTENCE = str + " is cool!";
    for (let i = 0 ; i < str.length; i+=2){
        console.log(SENTENCE);
    }
}

    printManyTimes("Mamet");



//mutate array
const s=[5,7,2]; //we wanted to ignore this
function editInPlace(){
    //mutation
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
    editInPlace();

//prevent mutation by using freeze
function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Only change code below this line
    Object.freeze(MATH_CONSTANTS);
  
    // Only change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();


  //Arrow function with parameter in JavaScript: short to return
  //normal function
  var magic = () => {
      "use strict";
      return new Date();
  }

  //using arrow
var trick = () => new Date(); // date
console.log(trick());

// another example
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

//another example
const noArguments = () => "No arguments"; //return string
//const oneArgument = item1 = "One arguments" + item1;
//const twoArgument = (item1, item2) = "two arguments" + item1 + item2;


//increment using arrow
const increment = (number, value = 1) => number + value;

console.log(increment(5,2));//print 7
console.log(increment(5));// if there is no value added on the next parameter it will be added in the value from the defined parameter


/**
 * Use export to share a code block
 */
//example case
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export{uppercaseString};

export{lowercaseString};


/**
 * Reuse Js code using import
 */
//example case
import {uppercaseString, lowercaseString} from './string_functions.js'; // name of the function
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");

/**
 * use * to import everything from a file
 */
//example case
import * as myMathModule from "./math_functions.js";
myMathModule.add(2,3);
myMathModule.substract(5,3);

//example case
import * as stringFunctions from "./string_functions.js";
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

/**
 * export default: if only one value is being exported from a file. 
 */
 export default function subtract(x, y) {
  return x - y;
}


/**
 * import default: 
 */
//example case
import subtract from "./math_functions.js";
// Only change code above this line

subtract(7,4);

/**
 * Js promise: a constructor function to check the task completes
 * create a promise variable with the parameter to return after.
 * for example create a condition for if each condition that synchronize with the parameter
 * 
 */
//define the promise with the parameter
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
//create the condition every if
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }

//handle a fulfilled using then
  makeServerRequest.then(result => {
    console.log(result)
  })
});

//handle a rejected using catch
makeServerRequest.catch(error => {
  console.log(error);
});
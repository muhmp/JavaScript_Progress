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


//Rest parameter (...args)
/*at first
const sum = (...args) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}
*/
//map() ,filter().reduce()
const sum = (...args) => {
    return args.reduce((a,b) => a+b,0); //return
}
console.log(sum(1,2,3,4,56,789));
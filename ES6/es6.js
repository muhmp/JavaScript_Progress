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

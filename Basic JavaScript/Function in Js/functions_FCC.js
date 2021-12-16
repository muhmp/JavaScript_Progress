
/**Write Reusable JavaScript with Functions */
function reusableFunction(){
    console.log("Hi World");
  }

  //calling the functions
  reusableFunction();


/*Passing values to functions with arguments*/
function functionWithArgs (a,b){
    console.log (a+b);
    console.log (a*b);
}
//call the function
functionWithArgs (5,2);


//global scope variable
//Decalre the global variable
var myGlobal = 10; // global variable

function fun1() {
  // Assign 5 to oopsGlobal Here
oopsGlobal = 5;
}
//function 2
/*

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
      output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
      output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
  }
*/
/*
  //Local scope and functions
  function myLocalScope() {

  // Only change code below this line
  //Declare variable
  var myVar;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
*/

//Global vs local variable
var OuterWear = "T-Shirt"; //global variable
//create a local variable
function myOutfit(){
  var outerWear = "Sweater" // local variable of myOutfit function
  return outerWear; //returning the local variable
}
myOutfit(); //executing the function of myOutfit


/** Return a Value from a Function with ReturnPassed */
function timesFive (num){
  return num * 5;
}
var answer = timesFive(5);
console.log(answer);


/** understanding undefined value returned from a function */
var sum = 0;

//add function1
function addThree (){
  sum = sum +3;
}

//add function2
function addFive(){
  sum = sum +5;
}
//print / execute the function
addThree(); // in this case three didn't have a value and the result will be undefined
addFive(5); // addFive function return a value contain results


/** assignment with a return value*/
var processed = 0;
//pre-defined function
function processArg(num){
  return (num+3)+5;
}
//assign with a returned value
processed = processArg(7); // will proceed from pre-defined function first


/**stand in line used for queue in abstract data structure to kept items in order
 */
//1. write a function which takes an array (arr) and a number (item) as arguments
//2. add number to the end of the array
//3. Remove the first element of the array
// function should then return the element that was moved

//create a function
function nextInLine(arr,item){
    {//processing the item
    arr.push(item); // add value
    testArr.shift();//
    return arr[0];
  }
}

//setup
var testArr = [1,2,3,4,5];

//Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After: " + JSON.stringify(testArr));


//function with boolean
function welcomeToBooleans(){
  return true //return value to true variable  
}

//conditional form with function
function trueOrFalse(wasThatTrue){
  
}


// 3===3
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

console.log(testStrict(10));

function testStrict1(val) {
  if (val === 10) { // not equal
    return "Equal";
  }
  return "Not Equal";
}

testStrict1(10);


// Compare Equality
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

//not equal
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);


//testStrictNotEqual
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal"; // output
  }
  return "Equal";
}

console.log(testStrictNotEqual(10));

//test greater than
function testGreaterThan(val) {
  if (val>100) {  // Change this line
    return "Over 100";
  }

  if (val>10)  {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}
console.log(testGreaterThan(10));


//less equal
function testLessOrEqual(val) {
  if (val<=12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val<=24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);


//if else
function testElse(val) {
  var result = "";
  if (val > 5) {
    result = "Bigger than 5";
  }
else 
    result = "Smaller";
  return result;
}

console.log(testElse(4));


//function
function ifElse(val) {
  var result ="";
  if(val >5){
    result = "Bigger than 5";
  }
  else
  result = "Smaller than 5";
}
console.log(ifElse(3));


function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  }
  else {
    return "Between 5 and 10";

    }
  }

console.log(testElseIf(7));



function testSize(num) {
  // Only change code below this line
    if(num <5){
      return "Tiny";
    }
    else if (num <10){
      return "Small";
    }

    else if (num <15){
      return "Medium";
    }

     else if (num <20){
      return "Large";
    }
    
     else if (num >=20){
      return "Huge";
    }

}

console.log(testSize(7));


//golf
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  }
  else if (strokes <= par-2){
    return names[1];
  }

  else if (strokes == par-1){
    return names[2];
  }

  else if (strokes == par){
    return names[3];
  }
  else if (strokes == par +1){
    return names[4];
  }
   else if (strokes == par +2 ){
    return names[5];
  }
   else if (strokes >= par +3){
    return names[6];
  }
  return "Change Me";
}
console.log(golfScore(1, 2)); //(strokes, par)


function caseInSwitch(val) {
  var answer="";

  switch(val){ //parameter
    case 1:
    answer="alpha";
    break;
  }
  return answer;
}

caseInSwitch(1);

//case in switch
function caseInSwitch1(val) {
  var answer="";

  switch(val){ //parameter
    case 1:
      answer="alpha";
      break;

    case 2:
      answer="beta";
      break;

    case 3:
      answer="gamma";
      break;

    case 4:
      answer="delta";
      break;
    }
  return answer;
}

caseInSwitch1(1);


//switch
function switchOfStuff(val) {
  var answer = ""; //local variable
  switch(val){
    case "a":
    answer = "apple";
    break;
    case "b":
    answer = "bird";
    break;
    case "c":
    answer = "cat";
    break;
    default:
    answer = "stuff";
    break;
  }
  return answer;
}

console.log(switchOfStuff("b"));


function sequentialSizes(val) {
  var answer= "";
  switch(val) {
    case 1:
      case 2:
        case 3:
          answer = "Low";
          break;
          case 4:
            case 5:
              case 6:
                answer ="Mid";
                break;
                case 7:
                  case 8:
                    case 9:
                      answer ="High"
                      break;
  }
  //return value
  return answer;
}
//call the function
console.log(sequentialSizes(5));



// chain to switch
function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
  case "bob":
    answer= "Marley";
    break; 

    case 42: //be careful with string and data type of number
    answer= "The Answer";
    break;

    case 1:
    answer= "There is no #1";
    break;

    case 99:
    answer= "Missed me by this much!";
    break;
 
    case 7:
    answer= "Ate Nine";
    break;
}
  // Only change code above this line
  return answer;
}

chainToSwitch(7);


//abTest

function abTest(a,b){
  if (a<0 || b<0){
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b),2));
  //pow means : exponential Math.pow(2,2) means 2 square 2
  //sqrt means : square root. ie : math.sqrt(64) = 8
}
//call the function
console.log(abTest(-2,2));


//Counting cards
var count = 0;

function cc(card) {
  // Only change code below this line
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;    
  }

  var holdbet = 'Hold';
  if (count > 0){
    holdbet = 'Bet'
  }

  return count + " " + holdbet;
  // Only change code above this line
}

cc(2); cc('K'); cc(10); cc('K'); cc('A');
console.log(cc(4));
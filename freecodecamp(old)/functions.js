
//Functions
function reusableFunction(){
    console.log("Hi World");
  }

  //calling the functions
  reusableFunction();


//Passing values to functions with arguments
function functionWithArgs (a,b){
    console.log (a+b);
}
//call the function
functionWithArgs (1,2);


//global scope variable
//Decalre the global variable
var myGlobal = 10; // global variable

function fun1() {
  // Assign 5 to oopsGlobal Here
oopsGlobal = 5;
}
//function 2

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


//Global vs local variable
var OuterWear = "T-Shirt"; //global variable
//create a local variable
function myOutfit(){
  var outerWear = "Sweater" // local variable of myOutfit function
  return outerWear; //returning the local variable
}
myOutfit(); //executing the function of myOutfit


//return a value from function
function timesFive (num){
  return num * 5;
}
var answer = timesFive(5);
console.log(answer);

// understanding undefined value returned from a function
//Setup
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


//assignment with a return value
//Setup
var processed = 0;
//pre-defined function
function processArg(num){
  return (num+3)+5;
}
//assign with a returned value
processed = processArg(7); // will proceed from pre-defined function first



//stand in line used for queue in abstract data structure to kept items in order
//1. write a function which takes an array (arr) and a number (item) as arguments
//2. add number to the end of the array
//3. Remove the first element of the array
// function should then return the element that was moved

//create a function
function nextInLine(arr,item){
//processing the item
arr.push(item); // add value
testArr.shift();//
return arr[0];
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

testStrict(10);

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
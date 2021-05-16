
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
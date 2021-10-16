/**
 * Use the JavaScript Console to Check the Value of a Variable
 */
 let a = 5;
 let b = 1;
 a++;
 // Only change code below this line
 console.log(a);
 
 let sumAB = a + b;
 console.log(sumAB);

 /**
  * Use typeof to Check the Type of a Variable
  */
let seven = 7;
let three = "3";
console.log(seven + three);
// Only change code below this line
console.log(typeof seven);
console.log(typeof three);


/**
 * Catch Unclosed Parentheses, Brackets, Braces and Quotes
 */
 let myArray = [1, 2, 3];
 let arraySum = myArray.reduce((previous, current) =>  previous + current);
 console.log(`Sum of array values is: ${arraySum}`);



/**
 * Catch Arguments Passed in the Wrong Order When Calling a Function
 */

 function raiseToPower(b, e) {
    return Math.pow(b, e);
  }
  
  let base = 2;
  let exp = 3;
  let power = raiseToPower(base, exp);
  console.log(power);



/** 
 * Catch Off By One Errors When Using Indexing
 * */ 

 function countToFive () {
  let number = "12345"; //define number
  let len = number.length; //define length
  for(let i = 0 ;  i< len ; i ++){
      console.log(number[i]);
  } 
}
console.log(countToFive());





/**
 * Use Caution When Reinitializing Variables Inside a Loop
 */
//create function
function zeroArray(m,n){
  //create 2D array with m rows and n column
  var newArray = [];


  //for loop
  for (var i=0; i<m ; i++){ //m for row
      var row = [];
      //for loop for column
      for(var j=0; j<n ; j++){
          row.push(0);
      }
      //push the current row, which has n zeroes to array
      newArray.push(row);
  }
  return newArray;
}

var matrix = zeroArray(3,2);
console.log(matrix);


/**
 * Prevent Infinite Loops with a Valid Terminal Condition
 */

 function myFunc() {
  for (let i = 1; i <= 4; i += 2) {
    console.log("Still going!");
  }
}
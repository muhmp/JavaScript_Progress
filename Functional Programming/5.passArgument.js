/**
 * Pass Arguments to Avoid External Dependence in a Function
 */

// The global variable
let fixedValue = 4;

// Only change code below this line
//Try to pass argument to function and return increased value of this argument.
function incrementer(value) {
return fixedValue+1;
  // Only change code above this line
}
var anotherValue = incrementer(fixedValue); //equal 5
console.log(fixedValue)//print 4
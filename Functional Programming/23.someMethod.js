/**
 * Use the some Method to Check that Any Elements in an Array Meet a Criteria
 * @param {*} arr 
 * @returns 
 */

function checkPositive(arr) {
    // Only change code below this line
  
    return arr.some(function(value){
      return value >0;
    });
    // Only change code above this line
  }
  
  checkPositive([1, 2, 3, -4, 5]);
/**
 * Combine an Array into a String Using the join Method
 */

 function sentensify(str) {
    // Only change code below this line
  
    /* Convert string to array. then use regex  */

    return str.split(/\W/).join(" ");
  
    // Only change code above this line
  }
  
  console.log(sentensify("May-the-force-be-with-you"));
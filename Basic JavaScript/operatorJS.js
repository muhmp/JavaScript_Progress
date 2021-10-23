/**
 * Ternary operator ?
 */

 function getFee(isMember) {
     //ternary condition before executing in the condition
    return (isMember ? '$2.00' : '$10.00');
  }
  
  //condition one
  console.log(getFee(true));
  // expected output: "$2.00"
  

  //condition two
  console.log(getFee(false));
  // expected output: "$10.00"
  

  //condition three
  console.log(getFee(null));
  // expected output: "$10.00"
/** Return Part of an Array Using the slice Method*/

function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
  return anim.slice(beginSlice,endSlice);
    // Only change code above this line
  }
  
  const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  console.log(sliceArray(inputAnim,1,3)) //[ 'Dog', 'Tiger' ]
  console.log(sliceArray(inputAnim,0,1)) // [ 'Cat' ]
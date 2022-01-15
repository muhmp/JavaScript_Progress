/**
 * for each
 */


/**Example 1 */
 let text = "";
 const fruits = ["apple", "orange", "cherry"];
 fruits.forEach(myFunction);
 
console.log(fruits)
  
// function
 function myFunction(item, index) {
   text += index + ": " + item + "<br>"; 
 }


 /**example 2 */
const arr = ['person1','person2','person3'];
arr.forEach(element => console.log(element));
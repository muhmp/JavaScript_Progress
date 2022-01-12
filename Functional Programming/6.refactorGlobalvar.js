/**
 * Refactor Global Variables Out of Functions
 */

// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
//add array parameter
function add(arr,bookName) {
  //define array
  let newArr = [...arr];
  newArr.push(bookName);
  //bookList.push(bookName);
  return newArr;
  
  // Change code above this line
}

// Change code below this line
function remove(arr,bookName) {
  let newArr=[...arr];
if(newArr.indexOf(bookName)>= 0 ){
    newArr.splice(newArr.indexOf(bookName),1);//remove the parameter from the new array
  
    return newArr;
    // Change code above this line
    }
}

const newBookList = add(bookList, 'A Brief History of Time');
const newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
const newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
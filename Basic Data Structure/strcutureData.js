/**
 * Use an Array to Store a Collection of Data
 */
//number, string, property: value, boolean, number
let yourArray = [1,"Matt",{name:"Matt"}, true, 3]; // Change this line




let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "changes";
// Only change code above this line
console.log(myArray[1]);

/**
 * Add Items to an Array with push() and unshift()
 */

 function mixedNumbers(arr) {
    // Only change code below this line
      arr.unshift('I',2,'three');
      arr.push( 7, "VIII", 9);
    // Only change code above this line
    return arr;
  }
  

  console.log(mixedNumbers(['IV', 5, 'six']));



/**
 * remove items from an array using pop() and shift()
 */
  function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
  
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));


/**
 * Remove items using splice()
 */

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
let newArr = arr.splice(1,4); // meaning: remove the value of array of 2th and 5th
// Only change code above this line
console.log(arr);

/**
* add items using splice()
*/
function htmlColorNames(arr) {
// Only change code below this line

arr.splice(0,2,"DarkSalmon", "BlanchedAlmond");// define the value of the array first to put to the value position then define the value
// Only change code above this line
return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

/**
 * Copy array items using slice()
 */
function forecast(arr) {
// Only change code below this line

return arr.slice(2,4);
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


/**
 * Copy an array with spread operator
 */

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr.push([...arr]);// add element to the end of the array from the paramter
 
    // Only change code above this line
    num--; //decrement
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));

/**
 * combine array with spread operator (...args)
 */

function combine(){
  let text1 = ['to', 'code'];
  let text2 = ['leraning',...text1,'is','fun'];
  return text2; //return this value as the end result
}
console.log(combine());


/**
 * Check For The Presence of an Element With indexOf()
 */
//example case using if condition
function quickCheck(arr, elem) {
// Only change code below this line
  if(arr.indexOf(elem) >= 0){
    return true;
  }
// Only change code above this line
    return false;
  }
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

//example case 2

function check2 (par1, par2){
  arr.indexOf(par2) >=0 ? true:false; //if condition 
}
console.log(check2(["squash", "onions", "shallots"], "mushrooms"));

//example case 3
function quickCheck1(arr, elem) {
  return arr.indexOf(elem) != -1; //
}
console.log(quickCheck1(["squash", "onions", "shallots"], "mushrooms"));



/**
 * 
 * @param {*} arr 
 * @param {*} elem 
 * @returns 
 * 
 * iterate through item
 */
function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for(let i =0; i<arr.length; i++){
    if(arr[i].indexOf(elem)==-1){
    newArr.push(arr[i]);
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));



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

/**
 * multi-dimensional arrays
 */
let nestedArray = [['deep'],[['deeper'], ['deeper']],
  [[['deepest'], ['deepest']],
  [[['deepest-est?']]]]];

//examlple multi-dimension
let ArrayTypeTwo = [
  // Only change code below this line
  'level 1',                   /* myNestedArray[0]             */
  ['level 2'],	               /* myNestedArray[1][0]          */
  [['level 3','deep']],	       /* myNestedArray[2][0][0]       */
  [[['level 4','deeper']]],    /* myNestedArray[3][0][0][0]    */
  [[[['level 5','deepest']]]]  /* myNestedArray[4][0][0][0][0] */
  // Only change code above this line
];

//example multi-dimension array
let arrayTypeThree= [
  // change code below this line
  ["unshift", false, 1, 2, 3, "complex", "nested"],
  ["loop", "shift", 6, 7, 1000, "method"],
  ["concat", false, true, "spread", "array", ["deep"]],
  ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]],
  ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]]
  // change code above this line
];


/**
 * Add key-value pairs to Js Objects
 */
 let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,

};

// Only change code below this line
  foods['bananas']= 13;
  foods['grapes']=35;
  foods['strawberries']=27;
  console.log(foods);


/**Another example */
const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
  };
  //add pairs
  tekkenCharacter.origin = 'South Korea';

/**
 * Modify Nested objects within an object
 */

 let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Only change code below this line
userActivity.data.online = 45; // the value changes to 45 
// Only change code above this line

console.log(userActivity);

/**
 * Access Property Names with Bracket Notation
 */
 let fruits = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem){ // return the variable values with the defined parameter inside
  return fruits[scannedItem]; 
}
console.log(checkInventory("apples"));//string type


/**
 * Delete to remove objects
 */

 let kudamono = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Only change code below this line
delete kudamono.oranges;
delete kudamono.strawberries;
delete kudamono.plums;

// Only change code above this line

console.log(kudamono);


/**
 * check if an object has a property
 */
 let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // call the parameter first then get the value
     if(
     userObj.hasOwnProperty('Alan') &&
     userObj.hasOwnProperty('Jeff')&&
     userObj.hasOwnProperty('Sarah')&&
     userObj.hasOwnProperty("Ryan")
    )
  // Only change code above this line
  {
    return true;
  }
  return false;
};

console.log(isEveryoneHere(users));


//another example
let people = {
  Alan:{
    age: 27,
    online: true
  },
  Bob:{ age: 22, online: true},
  Clark: { age:25,online:true }
};

function checking(userName){
  //call them

  if (
    userName.hasOwnProperty('Alan') &&
    userName.hasOwnProperty('Bob') &&
    userName.hasOwnProperty('Clark')
  )
    {
      return true;
    }
      return false;
};
console.log(checking(people)); // call the function name then the main variable


/**
 * Iterate through the keys of an aobject with for..in statement
 */

 function countOnline(usersObj) {
  let results = 0; //define result
  //using for in accessing the array
    for (let user in usersObj) {
      if(usersObj[user].online===true){ //q
        results++;
      }
    }
  // Only change code above this line
      return results;
}


/**
 * Generate an Array of All Object Keys with Object.keys()
 */
 let profile = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Only change code below this line
   return Object.keys(obj);
  // Only change code above this line

}

console.log(getArrayOfUsers(profile));
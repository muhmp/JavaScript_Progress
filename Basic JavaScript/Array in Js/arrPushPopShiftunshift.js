/** Using push technique to manipulate array  */
const arr1 = [2,3,4];
arr1.push(4); //add new value at the end of the array
console.log(arr1);

/** Using pull */
const arr2 = [2,3,4];
arr2.pop(4); //remove value at the end of the array
console.log(arr2); //both 4 will disappear

/** shift: removes the last element of an array */
const arr3 = [2,3,4];
arr3.shift(); //removes the last element of an array
console.log(arr3); 

/**unshift: add elements in front of the array. */
const arr4 = [2,3,4];
arr4.unshift(9); //add elements in front of the array.
console.log(arr4); 


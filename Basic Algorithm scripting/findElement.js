/**
 * Finding keepers : the true number return. if false then is undefined
 * define number 
 * use for loop for the first parameter
 * equal it the number with the array
 * use if condition to match the true of the value
 * return the number
 */
function findElement(arr,func){
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        if (func(num)) {
          return num;
        }
      }
    
      return undefined;
}
console.log(findElement([1,3,5,8,9,10], num => num% 2 ===0));

//second way using find() function
function matchElm(arrNum,func){
    return arrNum.find(func);
}
console.log(matchElm([1,2,3,4], num => num% 2 ===0));

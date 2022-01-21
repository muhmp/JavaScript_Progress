/**Drop it
 * 
 */

//using while loop
function dropElements(arr, func) {
    //while arr is bigger than 0 and func parameter is not 0
    while(arr.length >0 && !func(arr[0])){
        arr.shift(); //remove the first element
    }
    return arr;
  }
 console.log( dropElements([1, 2, 3, 4,5], function(n) {return n >= 2; }));
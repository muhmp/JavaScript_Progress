/** Sum All numbers in a range
 * 
 * Hint: use Math.max and Math.min
*/

function sumAll(arr) {
    //define total
    let total = 0;
    
    //define max and min variable
    const max = Math.max(arr[0],arr[1]);
    const min = Math.min(arr[0],arr[1]);
    
    //loop condition
    for (let i=min; i<=max; i++){ //i started from the defined number & i is smaller than the max defined number 
        total += i; // assignment operator => will sum all the values 
    }
    return total;
  }
  
  sumAll([1, 4]);
  console.log(sumAll([1,4])); // 1+2+3+4 =10;
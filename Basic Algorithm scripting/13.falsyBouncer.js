/**
 * falsy bouncer
 * Remove all falsy values from an array
 * hint: use filter method
 */

/**
 * first way 
 * 1.define function with array parameter
 * 2.define array
 * 3.using loop with defined parameter
 *  if conditions of array of i and push the defined first array
 * 4. return the calculated results
 */

function generateFalse(arr) {
    let defArr = [];
    for(let i=0 ; i<arr.length;i++){
        if(arr[i]) defArr.push(arr[i]);
    }
    return defArr;
}

//somethings wrong with the ouput
console.log(bouncer([7, "ate", "", false, 9]));
/**
//second way using filter function
 function bouncer(arr) {

    return arr.filter(Boolean);
  }
 
  console.log(bouncer([7, "ate", "", false, 9]));
  */

  
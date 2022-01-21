/**
 * Flatten a nested array. 
 * You must account for varying levels of nesting.
 */


 function steamrollArray(arr) {
    
    //define flattened array
    const flattenedArray = [];
    //loop condition
    for (let i=0; i<arr.length;i++){
        //if array is flattened
        if(Array.isArray(arr[i])){
            //recursive flatten entries push to the flattenedArray
            flattenedArray.push(...steamrollArray(arr[i])); //... means return
        } else{
            //copy the not arrays (manipulate with the [] only)
            flattenedArray.push(arr[i]);
        }
    }

    return flattenedArray;
  }
  
console.log(steamrollArray([1, [2], [3, [[4]]]]));


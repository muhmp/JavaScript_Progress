/**
 * sortInput
 * 1.Hint: use sort method
 * 2.Once the array is sorted, then just check for the first number that is bigger and return the index.
 * 3.
 */

function getIndexToIns(arr,num){

    //sort
    arr.sort((x,y) => x-y);

    //check if the number is bigger
    for(let i=0; i<arr.length;i++){
        if(arr[i]>=num)
            return i;
    }
    return arr.length;
}

console.log(getIndexToIns([5,10, 20, 30, 40, 50], 35));
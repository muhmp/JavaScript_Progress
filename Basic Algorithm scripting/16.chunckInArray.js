/**
 * splits an array (first argument) into groups the length 
 * of size (second argument) and returns them as a two-dimensional 
 * array.
 * 
chunkArrayInGroups(["a", "b", "c", "d"], 2); */

function chunckInArray(arr,div){ //parameter of array and divider

    let temp = []; //temporary array for putting the arr
    let result = []; //for putting the results

    //for loop conditions
    for (let i =0 ; i<arr.length;i++){
        //condition for divider
        if(i % div !== div -1) // if div true
        temp.push(arr[i]); //push the divider
        else{
            temp.push(arr[i]);
            result.push(temp);
            temp = [];
        }
    } 
    //condition
    if(temp.length !== 0) //true
        result.push(temp);
        return result;
}
console.log(chunckInArray([1,2,3,4,5,6], 2))


/** method 2: shorter way */

function chunckInArray2(arr,size){
    //define temp
    let newArr = [];

    //condition
    while(arr.length > 0){
        newArr.push(arr.splice(0,size)); //push + splice method
    }
    return newArr;
}
console.log(chunckInArray2([2,1,2,3],2));
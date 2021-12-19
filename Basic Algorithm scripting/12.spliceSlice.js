/**
 * Splice and slice
 * given two arrays and an index
 * copy each element of the first array and second array in order
 * return the resulting array
 * 
 * 
 * The step:
 * 1.define function with two parameter an index
 * 2.define the second parameter equal with slice function
 * 3.use for loop then loop the first array
 *  then splice (insert what to fill here, , ,)
 * increment the index
 * 4. return defined variable
 */

function spliceSlice(arr1,arr2,n){
    let secondPar = arr2.slice(); // sliced

    for(let i=0; i<arr1.length;i++){
        secondPar.splice(n,0,arr1[i]); //
        n++; 
    }
    return secondPar;
}

//[par1, par2 , index]
console.log(spliceSlice([1, 2, 3], [4, 5, 6], 1));
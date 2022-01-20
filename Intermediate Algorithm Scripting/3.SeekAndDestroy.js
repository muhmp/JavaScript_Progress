/**
 * Seek & Destroy
 *  Remove all elements from the initial array that are of the same value as these arguments.
 */

 function destroyer(arr) {
    let valueRemove = Object.values(arguments).slice(1);

    for(let i =0; i<arr.length; i++){
        for(let j =0; j<valueRemove.length;j++){
            if(arr[i] === valueRemove[j]){
                delete arr[i];
            }
        }
    }    
    return arr.filter(item=> item !== null);
  }
  
 console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); 
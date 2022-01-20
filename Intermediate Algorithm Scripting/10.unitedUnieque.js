/**Sorted union */

function uniteUnique(arr1,arr2,arr3) {
    
    //define result
    const final = [];

    //loop argument to make the program work with two or more arrays
    for (var i = 0; i < arguments.length; i++) {
        var arrayArguments = arguments[i];

     // Loops through the array at hand
     for (var i = 0; i < arguments.length; i++) {
        var indexVal = arrayArguments[j];

    //Check if the value is already on the array
        if (final.indexOf(indexVal) < 0){
            final.push(indexVal);            
        }
    }
    }

    return final;

  }
  
 console.log( uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
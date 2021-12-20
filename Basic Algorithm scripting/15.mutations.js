/**
 * Mutations: 
 * Return true if the string in the first element of the array 
 * contains all of the letters of the string in the second element of the array.
 * 
 * hint 1: If everything is lowercase it will be easier to compare.
 * hint 2: Our strings might be easier to work with if they were arrays of characters.
 * hint3 : A loop might help. Use indexOf() to check if the letter of the second word is on the first.
 */

/**method 1: using indexOf() */
function mutations(arr){
    let test = arr[1].toLowerCase();
    let target = arr[0].toLowerCase();

    for(let i= 0 ; i<test.length;i++){
        if(target.indexOf(test[i]) < 0) return false;
    }
    return true;
}

console.log(["hello","hey"]);

/*explanation
- first we make two strings lowercase. test variable will hold
  for the target
- Then we loop through our test variable. if any of then didn't
  found return false. else if the condition found return true

*/



/** method 2: */
function mutation2(arr){
    return arr[1].toLowerCase().split("").every(function(letter){
        return arr[0].toLowerCase().indexOf(letter) !=-1;
    });
}
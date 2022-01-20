/**
 * Search and Replace
 */

 function myReplace(str, before, after){
    //define index before is on string
    const index = str.indexOf(before);

    
    //check the first letter uppercase or not 
    if (str[index]=== str[index].toUpperCase()){
        after = after.charAt(0).toUpperCase() + after.slice(1);
    } else{
        after = after.charAt(0).toLowerCase() + after.slice(1);
    }
     
    //replace the original str with the edited one
    str = str.replace(before,after);

    return str; //results

}

console.log(myReplace("a quick brown fox jumped over the lazy dog", "jumped", "leaped"));
/**
 * 
 * @param {*} str 
 * @returns 
 * Find the maximum of the string
 */
function lengthOfString(str){
    //use split function and define the string
    let words = str.split('');
    let maxLength = 0;

    //call the variable of the words
    for(var i=0; i< words.length;i++){
        if(words[i] > maxLength) { // if maxlength is more than 0
            maxLength = words[i].length;
        }
    }
    //return the defined variable
    return maxLength;
}

console.log(lengthOfString());
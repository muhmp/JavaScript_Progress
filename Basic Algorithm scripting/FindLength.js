/**
 * 
 * @param {*} str 
 * @returns 
 * Find the maximum of the string
 */
function lengthOfString(str){
    //use split function and define the string
    let words = str.split(' ');//going into array, add space here
    let maxLength = 0; // to get the value define variable start from zero

    //call the variable of the words
    for(var i=0; i< words.length;i++){
        if(words[i].length > maxLength) { // if maxlength is more than 0
            maxLength = words[i].length;
        }
    }
    //return the defined variable
    return maxLength;
}
console.log(lengthOfString('my name is mamet'));



//third solution using math max
function LongestWord(str){ // use rest parameter
    return Math.max(...str.split(" ").map(word =>word.length));
}

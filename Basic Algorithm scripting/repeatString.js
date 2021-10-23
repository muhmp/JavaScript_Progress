/**
 * Repeat a string
 * 1.use if num condition is less than 1
 * 2. return the string
 * 3. else return the repeated string parameter from the function and fill the parameter
 */

//define the function with string and number parameter
function repeatStringNumTimes(str,num){
    if(num <1 ){
        return "";
    } else {
        return str + repeatStringNumTimes(str,num-1);
    }
}

console.log(repeatStringNumTimes("mamet", 5));

//other way
function repeatStr(str){
    return str.repeat(3);
}

console.log(repeatStr("mamet"));

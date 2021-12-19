/**
 * Truncate a string
 * 1.define function with string and number parameter
 * 2.Use if condition of the string parameter length higher than the number
 * 3.return slice function (fill zero inside the parameter,fill num inside the parameter) + rest parameter
 * 4.else return string parameter
 */

function truncateString(str,num){
    if(str.length > num){
        return str.slice(0,num)+"...";
    }else{
        return str;
    }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
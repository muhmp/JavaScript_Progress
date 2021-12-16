/**
 * create a function for creating a reverse number
 * Example x = 32243;
 * Expected Output: 34223
 * use split() reverse() join() method together along with return
 * Notice split & join function must include with string inside
 */

//define
function revNum(num){
    //call the parameter
    num = num + ""; //num + empty string
    return num.split("").reverse().join("");//use split() reverse() join() method together along with return
}
//call the function
console.log(revNum(12345))
console.log(revNum("Hello"))
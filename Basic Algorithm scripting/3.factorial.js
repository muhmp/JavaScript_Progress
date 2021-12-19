/**
 * creating factorial 
 */
function factorial(num) {
    if(num==0 || num==1){
        return 1; //if the condition is 0 or 1
    } else {
        return num*factorial(num-1); // n * (n-1)
    }
}

console.log(factorial(9));

//Rest parameter (...args)
/*at first
const sum = (...args) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}
*/
//map() ,filter().reduce()
const sum = (...args) => {
    return args.reduce((a,b) => a+b,0); //return
}
console.log(sum(1,2,3,4,56,789));



//rest parameter function
function sum(...theArgs){
    return theArgs.reduce((previous, current) => {
        return previous + current;
    });
}
//print
console.log(sum(1,2,3));
console.log(sum(1,2,3,4));

function multiply(multiplier, ...args){
    return args.map(element => {
        return multiplier*element; //(number * next number)
    });
}
//print
let arr = multiply(4,3,4,5); // Output (4*3 , 4*4 , 4*5)
console.log(arr);


/*Rest parameter with function */
//define
const restParam = (...args) =>{
    return args.reduce((a,b) => a+b,0);
}
console.log(restParam(1,2,3,4)); //result of 1,2,3,4 should be 10
 
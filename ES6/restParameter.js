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

 
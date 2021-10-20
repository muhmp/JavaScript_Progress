/**
 * Converting Celsius to Fahrenheit
 * Equation: (celsius * 9/5)+32;
 */

//define function
function convertF(celsius){
    //define the fahrenheit variable
    let fahrenheit = (celsius*9/5) + 32;
    return fahrenheit;
}
//call the function
console.log(convertF(2));
/**
 * to check the property 
 */

const object1 = {};
object1.property1 = 30;

console.log(object1.hasOwnProperty('property1')); //true

console.log(object1.hasOwnProperty('toString')); //false

console.log(object1.hasOwnProperty('hasOwnProperty'));
// expected output: false

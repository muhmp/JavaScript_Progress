console.log('Hello World');
console.error('This is an Error');
console.warn("This is a Warning");
/*console/
alert
clear
*/


/*1.Variables in JavaScript
//var , let , const

let age = 30; //let
age = 31; //let variable can be continued
console.log(age);
*/

const a = 1; //const
//a = 2;// output will be error cause duplicate the initialization of the variable
console.log(a);


var b = 2; //var
b=4;
console.log(b);


/*Data typee in JS*/
/*String, Numbers, Boolean, Null, undefined,

const name = 'Matt';//string
const age = 25;
const rating = 4.5;
const bool =  true; //boolean
const x = null;//null: variable with the empty value (not really an object)
const y = undefined;
let z;

console.log(typeof z); // typeof : checking the description of the variable
*/

const Name = 'Matt';//string
const age = 25;

//Concatenation
console.log('My name is ' + Name + ' and I am ' + age);
//Template String
const hello = `My name is ${Name} and I am ${age}`;

console.log(hello);

//another example

const s = 'Hello World';

console.log(s.length); // length of the string
console.log(s.toUpperCase()); // using uppercase method
console.log(s.toLowerCase());
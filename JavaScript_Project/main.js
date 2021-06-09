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
console.log(s.substring(0,5)); //Substring (specified string)
console.log(s.split(''));// Split each string to see detail of each string

const t = 'technology , computers , it , code';
console.log(t.split(' , ')); // split each string

//Arrays : variables that hold multiple values

const num = new Array(1,2,3,4,5); //new Array() : Constructor

//const fruits = ['apples', 'oranges','pears',10,true];

const fruits = ['apples', 'oranges','pears'];

fruits [3] = 'grapes';
fruits.push('mangos'); // adding the value after
fruits.unshift('strawberries'); //adding the value before
fruits.pop(); //remove the last value

console.log(Array.isArray('hello'));
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('oranges'));
console.log(fruits[1]); // [] : read the value from the array
console.log(fruits); // adding more value to array 


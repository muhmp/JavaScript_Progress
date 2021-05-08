//Creating Comment
/* creating comment*/

//declaring variable
var myName;
var myVar, x, y;
myVar = 5;
x=1;
y=2;

//declaring variables 2
// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

//Addition
var add = 10+10;
//substraction
var sub = 20-10;
//multiplication
var mul = 10*8;
//division
var div = 66/33;

//increment
var inc = 87;
inc++;

//decrement
var inc1 = 87;
inc1--;

//decimal number
var dec = 5.7;

//multiply decimal
var multDec = 5.0 * 2.0;

//divide in decimal
var divDec = 4.4/2.0;

//remainder
var remainder;
remainder = 11%3;

//Compound assigment addition
var comAdd = 1
comAdd += 5;
console.log(comAdd) // result will be = 6

//Compound assignment with Substraction
var comSub = 11;
comSub -= 8;
console.log(comSub);

//Compound assignment with Multiplication
var comMul = 5;
comMul *=5;
console.log(comMul);

//Compound assignment with division
var comDiv = 20;
comDiv /= 10;
console.log(comDiv);

//Declare String variables
var myFirstName = "Matt";
var myLastName = "Matt";

//Escaping quotes
var EscQuotes = "I am a \"double quoted\" string inside \"double quotes\"."; 

//quoting string with single quotes
var quoStr ='<a href="http://www.example.com" target="_blank">Link</a>';
console.log(quoStr);

//Escape Sequences in Strings

/****
 * 
 * Code Output
 
\' Single quote
\" Double quote
\\ Backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form meed
*****/

var escSeq = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(escSeq);

//String plus string
var strPlus = "This is the start. "+ "This is the end."; 

//Concatenationg with plus equals operator
var ourStr = "I come first. ";
ourStr += "I come second.";
console.log(ourStr);

//Constructing with variables
var myName = "Matt";
var myStr = "Hello " +myName+ ", how are you?";

//Appending variables to Strings
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
console.log(anAdjective)
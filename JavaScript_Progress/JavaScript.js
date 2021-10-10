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

//Appending variables to Strings
var someAdjective = "Hey";
var myAdd = "Learning to code is ";
myAdd += someAdjective;

//Find the Length of a String
// Setup
var lastNameLength = 0;
var lastName = "Lovelace";
// Only change code below this line
lastNameLength = lastName.length;



//Use a Bracket notation to find the Character in a String
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]


//String Immutability
// Setup
var StrImm = "Jello World";
//Changing to hello world
StrImm = "Hello World";
StrImm[0]; // Apply H 

//Bracket for finding the last character of the String
// Setup
var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length-1];

//Bracket for finding Nth of the String
var lastName1 = "Lovelace";
var secondToLastLetterOfLastName = lastName1[lastName1.length - 2]; // Output will be C

//worldblank
//define variables of wordblanks
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";
//combine the word blanks
var wordBlanks = "The " + myAdjective + " " + myNoun +" " + myVerb + " " + myAdverb + "." ; //

//Store array (String)
//define array
var arrWord = ["Food", 2];

//nested array
var myArray = [["Length",120],["Height", 170]];

//access array
var accArray = [50,60,70];
accArray[0];
var myData = accArray[0]; // access the first array on new variable

//changing the array value
var accArray1 = [18,24,32];
accArray1[0] = 13 // change the value of the first array to 13

//multi dimensional array
var mulArr = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var mulData = mulArr [3][2];
console.log(mulData);

//manipulate array .push() function
vararrPush = [["John", 23], ["cat", 2]];
vararrPush.push(["dog",3]);
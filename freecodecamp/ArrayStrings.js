
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
var arrPush = [["John", 23], ["cat", 2]];
arrPush.push(["dog",3]);
console.log(vararrPush);

//pop function to remove value 
var arrPop = [["John", 23], ["cat", 2]];
var removedFromArray = arrPop.pop();
console.log(removedFromArray);

//Shift function
var arrShift = [["John", 23], ["cat", 2]];
shiftArr = arrShift.shift();

//Unshift
var arrUnshift = [["John", 23], ["cat", 2]];
myArray.shift();
myArray.unshift(["Paul",35]);//will change the value of the John to Paul

//example list application (Shopping list)
var myList = [["Milk",3], ["Chips", 3], ["Bread",2],["Juice",5], ["Water",3]];

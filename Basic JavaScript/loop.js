

/**
 * While loop
 */
var myArray = [];
var i= 0;
while(i < 5){
  myArray.push(i); //adding the value
  i++; //increment with the while condition
}

/**
 * decrement
 */
var decArr = [];
var i=5;//define i
    while(i>=0){//condition
        decArr.push(i);
        i--;
    }
console.log(decArr);

/**
 * increment array
 */
var incArr = [];
  // Only change code below this 
  for (var i=1 ; i<6 ; i++){
  incArr.push(i);
}
/**
 * odd number 
 */
//odd number 1-9
var oddArr = []; //initialize array
//loop
for(var i=1 ; i<=10; i+=2){
   oddArr.push(i); 
}


//// Setup
var backArr = [];

// Only change code below this line
for(var i=9 ; i>0 ; i-= 2){
  backArr.push(i);
}

//array length
var arrLength = [2,3,4,5,6,];
var total=0;//initilize total

for (var i =0; i<arrLength.length;i++){ //.length method is calling the value of the array length
    total += arrLength[i]; //using increment +=
}
console.log(total);


/**
 * 
 * @param {*} arr 
 * @returns
 * multiply array 
 */
function multiplyAll(arr) {
    var product = 1;

    for( var i=0; i<arr.length;i++){ //calling the array from the arr parameter (outer array)
        for(var j=0; j<arr[i].length;j++){ //j.arr[i] calling the inner array
              //multiply the value of i
            product *=arr[i][j]; 
        } 
    }
return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(product);


//do while
var doWhile = [];
var x=10;
    do{
      myArray.push(x);
      x++;
    } while (x<5);
    console.log(x, myArray);


//recursion
function sum(arr, n) {
    // Only change code below this line
    if (n<=0){
      return 0;
    }else{
      return sum(arr,n-1) + arr[n-1];
    }
    // Only change code above this line
  }


// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

//look up profile
function lookUpProfile(name, prop) {
  // Only change code below this line
    for (var i=0; i<contacts.length;i++){
        if(contacts[i].firstName === name){ //if the contact equal with the name
            return contacts[i][prop] || "No such property"; // display the property
        }
    }
    return "No such contact"
  // Only change code above this line
}
//accessing the data
var data = lookUpProfile("Akira", "likes");
console.log(data);


/**
 * using loop to print array (usual)
 */
  var loopArr=[]; //define array
  for(var i = 0 ; i<=10;i++){
    console.log(i); // if you wanted to show all the value
    //loopArr++; //if you wanted to print the results by incrementing the value
  }
  //console.log(loopArr);

 
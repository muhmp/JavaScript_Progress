/**Object in Js */
var ourDog = { //variable
//property and value
    "name":"doggo", // using coma at the next property
    "legs": 4,
    "tails":1,
    "friends" : ["Human"]
}; //close the bracket with ;

var dogHum = ourDog.name;
console.log(dogHum);


/** using array bracket */
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  // Only change code below this line
  //access using array
  var entreeValue = testObj["an entree"];   // Change this line
  var drinkValue = testObj["the drink"];    //


  // Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line

var playerNumber = 16;       // Change this line
var player = testObj[playerNumber];   // called the object using bracket

/** adding new properties */
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
 
 myDog.bark = "woof !"; //adding object to the previous object
 //delete object
 //delete myDog.bark;
 console.log(myDog.bark);


/** Phonetic Lookup */
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta" : "Denver",
    "echo":"Easy",
    "foxtrot": "frank"
  };
  result = lookup[val];
  // Only change code above this line
  return result;
}

console.log(phoneticLookup("charlie"));


/**testing object (hasOwnProperty) */
function checkObj(obj, checkProp) {
  // Only change code below this line
   if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
  // Only change code above this line
}


function checkObj(obj, checkprop){
  if(obj.hasOwnProperty(checkprop)){
    return obj.checkprop; //checking the checkprop parameter
  }else{
    return "not found"
  }
}


//nested array
var myPlants = [ //(array)
  { //obj 1
    type: "flowers",
    list: [ //key value (array)
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  { //obj 2
    type: "trees",
    list: [ //key value  (array)
      "fir",
      "pine",
      "birch"
    ]
  }
];

var secondTree = myPlants[1].list[1]; //access the second tree
console.log(secondTree);

//ID, Property, Value
//2458:{//ID
// "album": "single" //Property:value
//} 
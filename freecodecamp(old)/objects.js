//Example
var ourDog = { //variable
//property and value
"name":"doggo", // using coma at the next property
"legs": 4,
"tails":1,
"friends" : ["Human"]
}; //close the bracket with ;

var dogHum = ourDog.name;
console.log(dogHum);

//using array bracket
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

//adding new properties
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


 // Setup
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


//testing object (hasOwnProperty)
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


//complex object
var myMusic = [
  { "artist": "Billy Joel","title": "Piano Man","release_year": 1973,"formats": ["CD","8T","LP" ], "gold": true}
];


//another format
var ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];


var modernMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }, //look for the open and close bracket
  {
  //Add record (look after the coma)
    "artist": "LP",
    "title": "In the End",
    "release_year": 2000,
    "formats": [
      "YouTube Video",
      "CD"
      ]
  }
];

//nested object
var myStorage = {
  "car": { //nested
    "inside":{ //inside
      "glove box" : "maps",
      "passanger seat": "Chairs"
    },
    "outside":{ //nested
      "color":"black"
    }
  }
};

var accessStorage = myStorage.car.inside["glove box"];
//print
console.log(accessStorage);

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



// Setup
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Update records
function updateRecords(records, id, prop, value) {
  if (value === ""){ // if the value is strict equal
    delete records[id][prop];

  } else if (prop === "tracks"){ //if property is strict equal
    records[id][prop] = records[id][prop] || [];
    records[id][prop].push(value); 
  } else {
    records[id][prop] = value;
  }
  
  return records;
}
//calling the function from recordCollection information, id , property and value using update records function
console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
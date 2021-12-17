/** Nested object */
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
  
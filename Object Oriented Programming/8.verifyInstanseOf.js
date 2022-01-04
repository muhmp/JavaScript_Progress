function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  // Only change code below this line
  let myHouse = new House(5);
  myHouse instanceof House; //should return true;

  console.log(myHouse);

  /*Example*/
let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird;
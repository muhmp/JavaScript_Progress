  //using this
  let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {
      return "This dog has " + this.numLegs + " legs.";
    }
  };
  
  dog.sayLegs();

  //constructor
  // Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }

  
  //constructor
  function Dog(){
    this.name = "Inu";
    this.color = "Blue";
    this.numLegs = 4;
  }
  //creating new constructor with the same value
  let hound = new.Dog();



//Inheritance : to not repeat again
function Cat(name){ //cat
    this.name = name;
  }
Cat.prototype = {
    constructor: Cat
};

function Bear(name){
    this.name = name;
}

Bear.prototype = {
    constructor: Bear
}

//Inherit
function Animal(){

}
Animal.prototype = {
    constructor: Animal, // the animal type
    eat: function() {
        console.log("nom nom nom")
    }
}


function Animal1() { }

Animal1.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck = Object.create(Animal1.prototype); // Change this line
let beagle = Object.create(Animal1.prototype); // Change this line
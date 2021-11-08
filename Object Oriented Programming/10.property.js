/**
 * Using property for avoid duplicate item
 */

 function Dog(name) {
    this.name = name;
  }
  
  // Only change code above this line
  let beagle = new Dog("Snoopy");
  Dog.prototype.numLegs = 4; // object.prototype.property
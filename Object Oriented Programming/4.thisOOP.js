/**
 * Make Code More Reusable with the this KeywordPassed
 */

 let duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function() {
      return "The name of this duck is " + this.name + ".";}
  };

  //another example
  let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {
        return "This dog has " + this.numLegs + " legs.";} //called directly to the value
  };
  
  console.log(dog.sayLegs());
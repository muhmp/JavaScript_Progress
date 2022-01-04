
/**
 * checking the parameter using hasOwnProperty
 */

/** example  */
 function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  
  //has own property
  for (let property in canary){
    if(canary.hasOwnProperty(property)){
      ownProps.push(property);
    }
  }
  
  console.log(ownProps);



/**another example */
const obj1 = {};
obj1.property1 = 42;
//print
console.log(obj1.hasOwnProperty('property1')); //expected true because the variable specified as it own
console.log(obj1.hasOwnProperty('toString')); //expected false

/** practice */
const person1 ={};
person1.name = "mamet";
//print
console.log(person1.hasOwnProperty('name'));

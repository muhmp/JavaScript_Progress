
/**
 * Iterate proeprty
 */

 function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4; // property method
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  //pushing item to each properties
  for(let property in beagle){ //for property of the constructor
    if(beagle.hasOwnProperty(property)){ //if the constructor of..
        ownProps.push(property); //push the 
    }else{
      prototypeProps.push(property);
    }
  }
  
  console.log(ownProps);
  console.log(prototypeProps);
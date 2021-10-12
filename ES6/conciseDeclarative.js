//concise object literal declarations using object property shorthand

//example case
const createPerson = (name,age,gender) => {
    return {name,age,gender}; 
  };


//example case 2
//without concise declaration
// Only change code below this line
const bicycle = {
    gear: 2,
    setGear: function(newGear) {
      this.gear = newGear;
    }
  };
  // Only change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);

//with concise declaration
// Only change code below this line
const bicycle2 = {
    gear: 2,
    setGear(newGear2) {
      this.gear = newGear2;
    }
  };
  // Only change code above this line
  bicycle2.setGear(48);
  console.log(bicycle2.gear);
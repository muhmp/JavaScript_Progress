/**
 * efficient way to set prototype to a new object that already contains the properties
 */

 function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    // Only change code below this line
    numLegs: 4,
    //function
    eat: function(){ //define the function => name: function(){}
      console.log("eat");
    },
    describe: function(){
      console.log("Dog name is: " + this.name);
    }
  };


  



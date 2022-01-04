/**
 * Use a Mixin to Add Common Behavior Between Unrelated Objects
 */

 let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  // Only change code below this line
  //glidemixin as a function
  
  let glideMixin = function(obj){
    obj.glide = function() {
      console.log("Gliding!");
    };
  };
  //assign the function to each objects
  glideMixin(bird)
  glideMixin(boat)
  
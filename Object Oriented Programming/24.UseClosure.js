/**
 * Use Closure to Protect Properties Within an Object from Being Modified Externally
 */

/**example */
function Bird() {
    //code here
    let weight = 15;
  
    //code here
    this.getWeight = function(){
      return weight;
    };
  }
  
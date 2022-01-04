/**
 * Override Inherited method
 * 
 * Description: 
 */

/**Example  */
function Animal() { }
    Animal.prototype.eat = function() {
    return "nom nom nom";
    };
    function Bird() { }

    Bird.prototype = Object.create(Animal.prototype);

    Bird.prototype.eat = function() {
    return "peck peck peck";
};

/**Another example */
function Bird1() { }

//first argument
Bird1.prototype.fly = function() { return "I am flying!"; };

//create penguin object with function
function Penguin() { }
Penguin.prototype = Object.create(Bird1.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line
// add penguin prototype 
Penguin.prototype.fly = function(){
  return "Alas, this is a flightless bird.";
}
let penguin = new Penguin();
console.log(penguin.fly());
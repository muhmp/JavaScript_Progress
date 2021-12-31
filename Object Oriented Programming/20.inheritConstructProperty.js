/** Reset an Inherited construct Property */

/**
 * objects have been programmed to inherit 
 * the supertypes constructor properties. 
 */

//define function
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);

Dog.prototype = Object.create(Animal.prototype);

//reset an inherited constructor property
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();
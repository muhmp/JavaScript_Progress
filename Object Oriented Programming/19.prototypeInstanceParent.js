/**
 * set the prototype of the subtype (or child)
 */

 function Animal() { }

 //constructor
 Animal.prototype = {
   constructor: Animal,
   eat: function() {
     console.log("nom nom nom");
   }
 };
 
 //child part
 function Dog() { }
 // Only change code below this line
 Dog.prototype = Object.create(Animal.prototype);
 
 
 let beagle = new Dog();
 beagle.eat();
/**
 * Add Methods After Inheritance

 * Description:
 * A constructor function that 
 * inherits its prototype object from a 
 * supertype constructor function can still have its own methods in addition to inherited methods
 */

function Animal(){}
    Animal.prototype.eat = function(){
        console.log("nom nom nom");
    };

    //another function
    function Dog(){}

    //code below
    Dog.prototype = Object.create(Animal.prototype); // to understand this syntax check the previous function
    Dog.prototype.constructor = Dog;
    //method after inheritance
    Dog.prototype.bark = function(){
        console.log("Woof!")
    };
    //add code below
    let beagle = new Dog();

    beagle.eat();
    beagle.bark();


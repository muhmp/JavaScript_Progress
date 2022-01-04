/**example of defining constructor 
 * 
 * 
*/
function Dog(name, color) {
  this.name = "Inu";
  this.color = "Brown";
  this.numLegs = 4;
}
//code here
let terrier = new Dog("terrier","red"); // constructor
console.log(Dog)


/**another example */
//define
class polygon {
  constructor(){
    this.name = "polygon";
  }
}
//code here
const poly1 = new polygon();
console.log(poly1.name);
/**end */



/**another example */
class Person {
  constructor(name) {
    this.name = name;
  }
  introduce() {
    console.log(`Hello, my name is ${this.name}`);
  }

}
const otto = new Person('Otto');
otto.introduce();


/**another example */
// Constructor function for Person objects
function Person1(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Create a Person object
const myFather = new Person1("John", "Doe", 50, "blue");
console.log(myFather) //print all the information from the myFather variable
console.log(myFather.firstName) // print the specific part
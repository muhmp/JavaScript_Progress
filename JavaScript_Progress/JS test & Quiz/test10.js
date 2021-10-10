class Animal {
    constructor(name) {
      this.name = name;
    }
    
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
    present() {
      console.log(`This is ${this.name}.`);
    }
  }
  
  class Cat extends Animal {
    constructor(name) {
      super(name);
    }
    speak() {
      console.log(`${this.name} meows.`);
    } 
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
    show() {
      console.log(`${this.name} is a ${this.breed}.`);
    }
  }
  
  let c = new Cat('Sophie');
  c.speak();
  c.present();
  let d = new Dog('Spot', 'Rat Terrier');
  d.speak();
  d.present();
  d.show();
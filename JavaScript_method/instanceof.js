/**
 * Instance of
 */

//define function
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

//constructor
const auto = new Car ('Nissa','GTR',2020);


console.log( auto instanceof Car);
// expected output: true

console.log(auto instanceof Object);
// expected output: true

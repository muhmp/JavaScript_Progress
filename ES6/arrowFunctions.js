//function with multiple parameter
function sum(a,b){
    return a+b;
}
console.log(sum(1,2));

//arrowfunction
//exactly the same as the normal function as the top
let sum2 = (a,b) => a+b //everything after the arrow assumed to be return



//function with one parameter
function isPositive(number){
    return number >= 0;
}
//using arrow function

let isPositive2 = (number) => number >= 0;



//function with no parameters
function randomNumber(){
    return Math.random;
}

let randomNumbe2 = () => Math.random;

/** 
document.addEventListener('click',function(){
    console.log('click');
})
document.addEventListener('click',() => console.log('Click'));
*/

//another case of using arrow function and normal function
class Person {
    constructor(name){ //constructor: can create many objects
        this.name = name;
    }
//arrow with function
    printNameArrow() {
        //return
        setTimeout(()=> { 
            console.log('Arrow: ' + this.name);
        }, 100);
    }

    printNameFunction(){
        setTimeout(function(){
            console.log('Function: ' + this.name);
        },100);
    }
}

//display
let person = new Person ('Bob');
person.printNameArrow(); //first function with arrow
person.printNameFunction(); // second function without arrow
console.log(this.name);
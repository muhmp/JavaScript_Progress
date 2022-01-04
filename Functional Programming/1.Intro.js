/**Learn About Functional Programming */

// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';


/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/

//define the getTea
const getTea = (numOfCups) => {
    const teaCups = []; //store the value

//for loop
for (let i=1; i<=numOfCups ; i+=1){ //loop the parameter
    const teaCup = prepareTea(); //prepareTea from the variable deifned before
        teaCups.push(teaCup) //using push method to push insert the value of the teaCups
    }
    //return
    return teaCups;
};
//output
const tea4Me = getTea(5); // 
console.log(tea4Me);
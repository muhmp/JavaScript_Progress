/**
 * Implement the filter method on a prototype
 */


// The global variable
const s = [23, 65, 98, 5];

//function start here
Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  const newArray = [];

  
//Code start here

this.forEach(function(x){
    if(callback(x) == true){
        newArray.push(x);
    }});
    return newArray;
};

//calculation
const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

console.log(new_s);


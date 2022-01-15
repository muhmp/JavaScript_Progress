/**
 * - *Currying* a function means to convert a function of N arity into N functions of arity 1.
 * @param {*} x 
 * @returns 
 */

function add(x) {
  // Only change code below this line
 return y => z => x + y + z;

  // Only change code above this line
}

add(10)(20)(30);
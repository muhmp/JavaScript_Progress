/** indexOf method 
* method returns the first index at which a given element can be found in the array,
 or -1 if it is not present.
*/

const x = ["a","b","c","d","b"];
console.log(x.indexOf("a"))// expected output: 0

// start from index 2
console.log(x.indexOf('b', 2)); // expected output: 4


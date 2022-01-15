/**filter method in Js 

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]*/

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

//filter 
const filt = words.filter( x=> x.length>5);

console.log(filt);
const arr = [1,4,5,6,7];

//pass a function to map
const map1 = arr.map(z => z*2);

console.log(map1); //output : x2


//The Map object holds key-value pairs and remembers the original insertion order of the keys.
//get


const map2 = new Map();

map2.set('a',1);
map2.set('b',20);
map2.set('c',130);

console.log(map2.get('a'));

//hold a new value
map2.set('a',235);
console.log (map2.get('a')); //expected output = 235;

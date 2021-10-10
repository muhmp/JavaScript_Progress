//The Map object holds key-value pairs and remembers the original insertion order of the keys.
//get


const map1 = new Map();

map1.set('a',1);
map1.set('b',20);
map1.set('c',130);

console.log(map1.get('a'));

//hold a new value
map1.set('a',235);
console.log (map1.get('a')); //expected output = 235;

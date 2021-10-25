/**
 * Map function
 */
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




/**
let newArr = [];
function mapTech(arr){
    
    for(let i =0 ; i<arr.length ; i++){
        return newArr = arr[i].map(x =>x*2);
    }
}
console.log(mapTech([1,2,3,4]));
 */


//use map method declaring function
let arr1 = [1,2,3,4,5];
result = arr1.map(function(arr){
    return arr*2;
});
console.log(result);


//another example
var my_array = [1,3,5,2,4];

my_array.map(function(item,index,arr) {
  console.log("item: " + item + " at index: " + index + " in the array: " + arr);
});
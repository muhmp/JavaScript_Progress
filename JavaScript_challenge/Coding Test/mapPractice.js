/**
 * 
 */

//normal mapping technique
var m = [2,5,1,4];
var n = m.map(m => m *2);
console.log(n)

//math square with map
let a = [1,4,6];
let roots = a.map(function(a){
    return Math.sqrt(a);
})
console.log(roots);
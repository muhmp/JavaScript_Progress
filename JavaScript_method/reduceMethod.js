const arr1 = [1,2,3,4];
const reducer = (prevValue, nextValue) => prevValue + nextValue;

//print
console.log(arr1.reduce(reducer));
//expected outpu:10

console.log(arr1.reduce(reducer,10)) // input the nextvalue
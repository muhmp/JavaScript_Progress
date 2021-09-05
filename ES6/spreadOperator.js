//spread operator
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 =[...arr1]; //rest parameter in array
console.log(arr2);

//another example spread operator using apply function
const arr3 = [1,2,3,4,2134];
console.log(Math.max.apply(null,arr3)); //old way
console.log(Math.max(...arr3));//using spread operator (new way)
console.log(Math.min(...arr3));//using spread operator (new way)


//creating forecast 

const TEMPERATURES = {
    today:35,
    tomorrow:33,
    yesterday:32
};

//use spread operator
//hint
/*
const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;
*/

const {today, tomorrow, yesterday} = TEMPERATURES;
console.log(today);
console.log(tomorrow);

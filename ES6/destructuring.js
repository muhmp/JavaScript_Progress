//assingn variable to the object
const HIGH_TEMPERATURES = {
    yesterday1: 75,
    today1: 77,
    tomorrow1: 80
  };
  /*  hint
const highToday = HIGH_TEMPERATURES.today;
const highTomorrow = HIGH_TEMPERATURES.tomorrow; 
*/
//assign variable to the object
const {today1:highToday , tomorrow1:highTomorrow} = HIGH_TEMPERATURES;
console.log(highToday);

//destructing assignment for nested objects
const LOCAL_FORECAST = {
  yesterday2: {
    low:61,
    high:75
  },
  today2: {
    low:60,
    high:71
  },
  tomorrow2: {
    low:66,
    high:54
  }
};
//destructuring -> {property:{subproperty:value}} = Variable
const {today2:{low:lowToday, high:highToday1}} = LOCAL_FORECAST;
console.log("Weather is: ", highToday1); // load the value

//destructuring variables from arrays
//basic swap techniques
/*
let temporary = a;
a=b;
b=temporary;
 */
let a = 8, b=6;
[a,b] = [b,a]; //swap

//other example
const[x,y,,, z] = [1,2,3,4,5,6]; //,,, will skip the next value 3 times
console.log(x,y,z);
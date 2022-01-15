/**Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem */

const squareList = arr => {
    // Only change code below this line
    
    /*  1. use filter for positive integers (decimal are not integers) 
        2. map()  the values from the filter function()
        3. reduce() for 
    
    */ 
    return arr.filter(num => num > 0 && num % parseInt(num) === 0).map(num => Math.pow(num,2));
    // Only change code above this line
    
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);
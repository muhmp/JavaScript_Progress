function genNum(){
    return Math.random();
}
console.log(genNum());


function randomWholeNum() {

    // Only change code below this line
  
    return Math.floor(Math.random() * 10); //number between 0-10
  }

  console.log(randomWholeNum());


//random range
  function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random()*(myMax - myMin +1)) + myMin;
    // Only change code above this line
  }
  console.log(randomRange(4,3));

  
//convert using parseInt
  function convertToInteger(str) {
    return parseInt(str);
  }
  
  convertToInteger("56");


  //prase Int with Radix
  function convertToInteger(str) {
    return parseInt(str,2);
  }
  
  convertToInteger("10011");
  console.log(convertToInteger());


  //ternary operator = basically same with if same its true if not its false
  //condition ? 

function checkEqual(a, b) {
    return a === b ? "Equal":"Not Equal";
  
  }
  
  checkEqual(1, -1);
  console.log(checkEqual(1,-1));


  //multiple ternary
  // add :
  function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
  }
  
  checkSign(10);
  console.log(checkSign(10));


  // Only change code below this line
function countdown(n){
    if (n<1){
      return [];
    }else {
      const arr = countdown(n-1);//recursion
      arr.unshift(n);
      return arr;
    }
  }
  // Only change code above this line
//recursive quiz
  function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0) {
      return[startNum];
    } else{
      var numbers = rangeOfNumbers (startNum, endNum -1 ); //recursion (n- (n-1))
      numbers.push(endNum);
      return numbers;
    }
  }; 
  
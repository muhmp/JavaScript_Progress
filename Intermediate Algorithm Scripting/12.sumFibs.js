/**
 * sum fibonacci
 */

//sum all the  ODD numbers
function sumFibs(num) {
    //define previous and next number
    let prev = 0;
    let next = 1;
    let result = 0;

    //condition
    while(next <= num){
        //condition if the number cannot divided by 2
        if(next %2 !== 0){ //ODD part
            result += next;

        }
        //else
        next += prev; // sum with the previous number
        prev = next - prev;
    }
    
    return result;
  }
  
  console.log(sumFibs(10)); //1+1+3+5
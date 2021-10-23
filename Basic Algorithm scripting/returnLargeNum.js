/**
 * Return largest numbers in arrays
 */
//solution 1
function largestOfFour(arr) {
    return arr.map(function(group) { //create function including reduce method inside a function
      return group.reduce(function(prev, current) { //create function using reduce to combine the previous and the next value
        return current > prev ? current : prev; //if condition 
      });
    });
  }
  
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


//solution 2
function largeInside(num){
    //define array
    let results = [];
    for(let i=0;i<num.length;i++){
        //define compared number using array
        let compareNum = num[i][0];
        for(let j=1 ; j<num[i].length;j++){ //for array of the i
            if(num[i][j] > compareNum){ //compare the value num[i][j] > num[i][0];
                compareNum = num[i][j]; // get both value of i and j
            }
        }
        results[i] = compareNum; //get the value equal to the array
    }
    return results;
}

console.log(largeInside([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

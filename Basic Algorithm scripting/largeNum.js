/**
 * return large number
 */

 //define variable
 let arrNum = [20,10];

//define function
function largeNum(num){
    
    for(var i = 0 ; i<num.length ; i++){
        //define large num
        let largeNum = num[i][0];
        //create another loop in previous loop item
        for(var j=1; j<num[i].length; i++){
            if(num[i][j] > largeNum){// condition for large number
            } 
        }   
        arrNum[i] = largeNum;
    }
    return arrNum
}

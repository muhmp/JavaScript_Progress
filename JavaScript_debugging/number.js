/** 
 * Catch Off By One Errors When Using Indexing
 * */ 

function countToFive () {
    let number = "12345"; //define number
    let len = number.length; //define length
    for(let i = 0 ;  i< len ; i ++){
        console.log(number[i]);
    } 
}
console.log(countToFive());
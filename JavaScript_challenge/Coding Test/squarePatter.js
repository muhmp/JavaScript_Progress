/**
 * square pattern in js
 */

let n = 5;
let string = ""; //defining string in js

//star pattern using for
for(let i=0;i<n;i++){ // for row
    for(let j=0;j<n;j++){ //for column
        string +="*"; // create column -> looks like a line
    }
    string +="\n"; // adding enter after row condition fulfil the condition
}

//print
console.log(string);

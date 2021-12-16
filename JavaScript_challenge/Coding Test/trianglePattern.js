/**
 * right triangle pattern
 */

let number=5;
let string="";
for (let i=1; i<=n; i++){//row
    //print spaces
    for(let j = 0 ; j<number - i ; j++){ // 5 star 4 star 3 star 2 star 1 star
        string += "0";
    }
        //printing star
        for(let k=0 ; k<i; k++){
            string +="*";
    }               
            string +="\n";    
}
console.log(string);


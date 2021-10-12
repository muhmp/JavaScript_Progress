
/** Template Literal
 * special type of string that makes creating complex strings easier.
 * using `` and ${ } to
 */

//example case
let word1 = 'muhammad';
let word2 = 'mappanyompa';
const fullName = `${word1} ${word2}`;
console.log(fullName)







//example case
//define the array 
const result = {//parameter : value
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};

//define the function
function makeList(array){
    const failureItems = [];
    //loop for failure defined failure items
    for (let i =0; i<array.length ; i++){
        //using push method for adding the value to the 
        failureItems.push(`<li class="text-warning">${array[i]}</li>`);
    }
    return failureItems;
};

const failuresList = makeList(result.failure);

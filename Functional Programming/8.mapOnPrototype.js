/**
 * Implement map on a Prototype
 */

//global variable
const s = [23,65,98,5];

//multiply variable 
const new_s = s.myMap(function(item){
    return item *2;
});

//get the data
Array.prototype.myMap = function(callback){
    var newArray=[];

    //only change code below this line

    /**get the array using forEach
    this.forEach(a => newArray.push(callback(a)));
    return newArray;
    
    /**
     * using push
     */
    for (let i =0 ; i<this.length; i++){
        newArray.push(callback(this[i]));
    }
    return newArray;
};
console.log(new_s)
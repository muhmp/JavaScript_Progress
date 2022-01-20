/**
 * Wherefore art thou
 */

 function whatIsInAName(collection, source) { //two parameter

    // Only change code below this line

    //define key variable including object 
    var srcKeys = Object.keys(source); //parameter source

    //filter collection
    return collection.filter(function(obj){ //obj parammeter
        //loop condition for srcKey variable
        for(var i = 0 ; i<srcKeys.length;i++){
            if(!obj.hasOwnProperty(srcKeys[i]) || 
            obj[srcKeys[i]] !== source[srcKeys[i]]) //if the obj parameter is !
            {
                return false;
            }
        }
            return true; //else
        });
    }



//testing 
console.log(
    whatIsInAName([
        {first: "Romeo", last: "Montague" },
        { first: "Mercutio", last: null }, 
        { first: "Tybalt", last: "Capulet" }],
         { last: "Capulet" })
    );


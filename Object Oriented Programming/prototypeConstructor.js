/**
 * properties and methods can be added to an Array() object using the property constructor
 * 
 */


 Array.prototype.lowerCase = function(){
    let i = 0;
    for(let i=0; i<this.length;i++){
        //lowercase
        this[i] = this[i].toLowerCase();
    }

 };

/* 
function myFunction() {
    var choc = ["hErSheYs", "MaRS", "Twix"];
    choc.myLcase();
    document.getElementById("demo").innerHTML = choc;
  }
   */ 
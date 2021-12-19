/**
 * Reverse string
 */

//method 1: using build in functions 
//split()  reverse() join()

//define function
function reverseString(str){
    //call the parameter
    var reverseSplit = str.split("");
    var reverseArray = reverseSplit.reverse(""); // call the previous variable
    var joinArray = reverseArray.join("") // call the previous variable

    //return
    return joinArray;
}

console.log(reverseString('Hello'));


//method 2: Shorter way by combining all the method
function reverseString2(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString2("Testing name"));




//method 3: using decrementing loop
function reverseWithLoop(text){
    //define string
    var reversedString = "";


    //for loop
    for(var i=text.length - 1; i>=0;i--){
        reversedString += text[i]; //increment
    }
        /* Here hello's length equals 5
        For each iteration: i = text.length - 1 and  var reversedString = reversedString += text[i];
        First iteration:    i = 5 - 1 = 4,          var reversedString = "" + "o" = "o"
        Second iteration:   i = 4 - 1 = 3,          var reversedString = "o" + "l" = "ol"
        Third iteration:    i = 3 - 1 = 2,          var reversedString = "ol" + "l" = "oll"
        Fourth iteration:   i = 2 - 1 = 1,          var reversedString = "oll" + "e" = "olle"
        Fifth iteration:    i = 1 - 1 = 0,          var reversedString = "olle" + "h" = "olleh"
    End of the FOR Loop*/

    //return the variable that already defined 
    return reversedString;
}
console.log(reverseWithLoop('Mamet'));
/**
 * Confirm end
 */

//using first method slice()

//define function
function confirmEnding (str,target) { // parameter str and target
    return str.slice(str.length - target.length) == target;
}
console.log(confirmEnding("test","t"));



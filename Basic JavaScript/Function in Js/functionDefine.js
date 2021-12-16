//1 normal way
function square(x) {
	return x*x;
}

//2 defined varibale
const square = function(x) {
	return x*x
};

//3 Arrow function expression
const square = (x) => { //return
	return x*x
}

//4. concise arrow function expression
const square = x => x*x;
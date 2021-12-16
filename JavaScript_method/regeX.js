var str = ".1abc2.5efg3mno";
var regexStr = str.match(/[a-z]+|[^a-z]+/gi);
console.log(regexStr);
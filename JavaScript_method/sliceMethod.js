/**
 * slice method
 */

 const str = 'The quick brown fox jumps over the lazy dog.';

 console.log(str.slice(31)); // cut the string at the 31th character
 // expected output: "the lazy dog."
 
 console.log(str.slice(4, 19)); // cut the string from nth to mth
 // expected output: "quick brown fox"
 
 console.log(str.slice(-4));// backward
 // expected output: "dog."
 
 console.log(str.slice(-9, -2));// from minus -th to minus th
 // expected output: "lazy"
 
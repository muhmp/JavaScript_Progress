/**
 * Title Case a Sentence
 * Return the provided string with the first letter of each word capitalized. 
 * using toLowerCase() function to lower the string
 * replace the regex expression
 * 
 * 
 * Regex explanation:
Find all non-whitespace characters (\S)
At the beginning of string (^)
Or after any whitespace character (\s)
 * 
 * the g modifier searches for other such word pattern in the whole string and replaces them.
This solution works with national symbols and accented letters as illustrated by following examples
international characters: ‘бабушка курит трубку’ // -> ‘Бабушка Курит Трубку’
accented characters: ‘località àtilacol’ // -> ‘Località Àtilacol’

 */

function titleCase(str){
    return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}
console.log(titleCase("Mamet"));


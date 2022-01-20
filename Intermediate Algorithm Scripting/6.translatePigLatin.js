/**
 * translate pig lation
 */

 function translatePigLatin(str) {
    //define the vowel using regex

    let vowel = /^[^aiueo]+/;
    let consonant = str.match(vowel);
    return consonant !== null ? str.replace(vowel, "").concat(consonant).concat("ay") : str.concat("way");
  }
  
  translatePigLatin("consonant");
console.log( translatePigLatin("consonant")); 
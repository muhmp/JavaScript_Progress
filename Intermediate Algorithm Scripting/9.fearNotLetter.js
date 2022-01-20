/** Missing letter */

function fearNotLetter(str) {
     
//loop condition
    for(let i=0; i<str.length; i++){
        const code = str.charCodeAt(i);

        //  if code of current character is not equal to first character + no of iteration hence character has been escaped 
        if (code !==str.charCodeAt(0) + i){
            return String.fromCharCode(code-1); /* if current character has escaped one character find previous char and return */
        }
    }
    return undefined;
  }
  
  console.log( fearNotLetter("abce"));
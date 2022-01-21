function rot13(str) {
    var alphabets =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'," ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
      
      var alphabets13 = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M', " ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
      
      var result =[];
      for(let i=0; i<str.length; i++){
          for(let j =0; j<alphabets.length; j++){
              if(str[i] === alphabets[j]){
              result.push(alphabets13[j]);
              }
          }
      }
    return result.join("");
  }
  
  rot13("SERR PBQR PNZC");
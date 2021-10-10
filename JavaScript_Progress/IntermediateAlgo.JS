//sumAll
function sumAll(arr) {
    var sumBetween = 0;
    for (let i= Math.min(...arr); i<=Math.max(...arr);i++){
      sumBetween+=i;
    }
    return sumBetween;
  }
  
  sumAll([1, 4]);



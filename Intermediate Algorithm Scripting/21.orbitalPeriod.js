/**
 * Map the debris
 */

 function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    //define a
    const a = 2* Math.PI;
    //define arr
    const newArr = [];

    const getOrbPeriod = function(obj){
        const c = Math.pow(earthRadius + obj.avgAlt,3);
        const b = Math.sqrt(c/GM);
        const orbPeriod = Math.round(a*b); //2 phi . equation
        //create new object
        return {name:obj.name , orbitalPeriod: orbPeriod};
    };

    for (let elem in arr){
        newArr.push(getOrbPeriod(arr[elem]));
    }
    return newArr;
  }
  
  console.log( orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
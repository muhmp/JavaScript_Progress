//define currency

const currencyUnit = {
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000
  }
  
  function checkCashRegister(price, cash, cid) {
  
  //define
    let changeSum = cash *100 - price *100;
    let change = [];//hold
    let changeSumCheck = changeSum;
    let status = '';
  
    
  
    
    let cidSum = 0; //cash in drawer
    //filter
    let filteredCid = cid.filter(elem => elem[1] !== 0).reverse();
  
    //filtered CID
  
    filteredCid.forEach(elem => {
      let curr = elem[0];
      let currSum = elem[1] * 100;
      cidSum += currSum;
      let amount = 0;
      while (changeSum >= currencyUnit[curr] && currSum > 0) {
        amount += currencyUnit[curr];
        changeSum -= currencyUnit[curr];
        currSum -= currencyUnit[curr];
      }
      if (amount !== 0) {
        change.push([curr, amount / 100]);
      }
    });
  
    //if condition of the change > 0
  
    if (changeSum > 0) {
      status = 'INSUFFICIENT_FUNDS';
      change = [];
    } else if (changeSum == 0 && changeSumCheck == cidSum) {
      status = 'CLOSED';
      change = cid;
    } else {
      status = 'OPEN';
    }
    return { 'status': status, 'change': change };
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
  
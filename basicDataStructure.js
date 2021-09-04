
//array with data
let yourArray = [
    {"name": "Matt"
    , "Age" : 25
    },
      true,
        95,
        "Hello",
            "dang"
    ];

// 
function quickCheck(arr, elem) {
        // Only change code below this line
          if (arr.indexOf(elem)>=0){
            return true;
          }
          return false;
        // Only change code above this line
      }
      console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

//
function quickCheck1(arr, elem) {
    // Only change code below this line
        return arr.indexOf(elem) >= 0 ? true : false;
  }
  console.log(quickCheck1(['squash', 'onions', 'shallots'], 'mushrooms'));
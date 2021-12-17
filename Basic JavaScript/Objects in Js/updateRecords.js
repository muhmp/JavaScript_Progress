
// Setup
var recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Update records
  function updateRecords(records, id, prop, value) {
    if (value === ""){ // if the value is strict equal
      delete records[id][prop];
  
    } else if (prop === "tracks"){ //if property is strict equal
      records[id][prop] = records[id][prop] || [];
      records[id][prop].push(value); 
    } else {
      records[id][prop] = value;
    }
    
    return records;
  }
  //calling the function from recordCollection information, id , property and value using update records function
  console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
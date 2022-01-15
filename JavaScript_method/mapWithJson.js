/**
 * Map with JSON
 */

//create car object / array
const car = [{"Brand": "Lambo" , "Year":2021}];

//use map function to Extract Data from an Array

const info =  car.map(theCar => ({
    model: theCar["Brand"], release : theCar["Year"]
}));

console.log(JSON.stringify(info))
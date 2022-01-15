/**Arrow function expressions 
 * 
 * An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.
*/
const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  console.log(materials.map(material => material.length));
  // expected output: Array [8, 6, 7, 9]
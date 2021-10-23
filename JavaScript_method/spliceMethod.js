/**
 * splice method
 */
 const months = ['Jan', 'March', 'April', 'June'];
 months.splice(1, 0, 'Feb');
 // inserts at index 1
 console.log(months);
 // expected output: Array ["Jan", "Feb", "March", "April", "June"]
 
"use strict"
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = {inArray, inBetween, byField, makeArmy }; //add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {Array} arr holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 * 
 */
 function inArray(arr) {
    return function(x) {
      return arr1.includes(x);
    };
  }
  
  let arr1 = [1, 2, 3, 4, 5, 6, 7];
  console.log( arr1.filter(inArray([1, 2, 10])) );


  ////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * 
 * @param {number} low is bottom of range
 * @param {number}  high is top of range
 * @returns {Function} returns a function that tests whether its argument is inside the range
 * 
 */
 function inBetween(a, b) {
    return function(x) {
      return x >= a && x <= b;
    };
  }
  
  let arr = [1, 2, 3, 4, 5, 6, 7];
  console.log( arr.filter(inBetween(3, 6)) );

  ///////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * 
 * @param {String} fieldName is a property on object to be sorted
 * @returns {Function} sorting function
 */
 function byField(value) {

    return function (a, b) {
        return a[value] > b[value] ? 1 : -1;
    }
}

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

let sortByName = users.sort(byField('name'));
let sortByAge = users.sort(byField('age'));

console.log(sortByName);
console.log(sortByAge);


/**
 * @returns {Function} closure that returns it's number
 */
 function makeArmy() {

    let shooters = [];
    
    
    
    let idx = 0;
    
    while (idx < 10) {
    
    let j=idx;
    
    let shooter = function() {
    
    console.log("I am shooter ", idx);
    
    return j;
    
    };
    
    shooters.push(shooter); // and add it to the array
    
    idx++;
    
    
    
    }
    
    return shooters;
    
    // // // ...and return the array of shooters
    
    // // return shooters;
    
    }
      
    
    let army = makeArmy();

// Now the code works correctly
// army[0](); // 0
// army[5](); // 5
// army[9](); // 9
  //army[0](); // the shooter number 0 shows 10
  //army[5](); // and number 5 also outputs 10...
"use strict";

// /* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
// */ 
// module.exports = {double, times100, myMap }; //add all of your function names here that you need for the node mocha tests




/**
 * 
 * @param{number} given a number
 * @returns {number} double the input
 */
function double(num){
    return 2 * num
}



/**
 * 
 * @param{number} given a number
 * @returns {number} 100 times the input
 */
 function times100(num){
     return 100 * num
 }



/**
 * 
 * @param{array} given array
 * @param{function} to double or multiply by 100 the array elements
 * @returns{Array} creates a new array with function mapped to each element
 */

 function double( num ) {
    return 2 * num;
  }
  
  function times100( num ) {
    return 100 * num;
  }
  
  function myMap( arr, func ) {
    let newArr = [];
    let result;
    if( func === double) {
    for( let each of arr) {
      let m = double;
      newArr.push(m(each));
    }
  
    return newArr;
    }
  
  if( func === times100) {
    for( let each of arr) {
      let n = times100;
      newArr.push(n(each));
    }
  
    return  newArr;
    
  }
  }
  console.log(myMap([1,2,3], double));
  console.log(myMap([1,2,3], times100));

/**
 * 
 * @param{param} given array
 * @param{function} to triple the inputed array elements
 * @returns{Array} creates a new array with function mapped to each element
 */

 function triple( num ) {
    return 3 * num
  }
  
  let triples = num => 3 * num;
  
  function myMap1( arr, func ) {
    let newArr = [];
    if( func === triple) {
    for( let each of arr) {
      let p = triple;
      newArr.push(p(each));
    }
    return newArr;
    }
  
    if( func === triples ) {
      for(let each of arr ) {
        let z = triples;
        newArr.push(z(each))
      }
      return newArr
    }
  }
  console.log(myMap1([4,2,3], triple));
  console.log(myMap1([2,2,3], triples));

  
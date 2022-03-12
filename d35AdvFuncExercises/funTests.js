"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser.
*/
//module.exports = { myMap, myFilter, myReduce }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @returns 
 */
 
  function myMap(arr, func){
    let newArr = [];
      for(let each of arr){
            newArr.push(func(each))
                 }
      
    return newArr;
  }

    
/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @returns 
 */
  function myFilter(arr, func){
      let newArr = [];
      for(let each of arr){
          if(func(each) === true){
              newArr.push(each)
          }
      }
    return newArr;
  }
//console.log(myFilter([1,2,3,4,5,6], filter))
/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @param {*} initialValue 
 * @returns 
 */
   function myReduce(arr, func, initialValue){
     for(let each of arr){
         initialValue=func(initialValue,each);
     }
     return initialValue;
   }
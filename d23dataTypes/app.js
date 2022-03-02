"use strict";
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { ucFirst, getMaxSubSum, truncate , camelize, checkSpam}; //add all of your function names here that you need for the node mocha tests



function ucFirst(str) {
   if(str===""){
    return str;
   }
  else{
  let upper = str[0].toUpperCase() + str.slice(1, str.length);
  return upper;
  }
  //let newStr = str[0].toUpperCase() + str.slice(1);//  it gives the same output

}
console.log(ucFirst("getahun"))



  function checkSpam(str) {

    let lowerStr = str.toLowerCase();

    if (lowerStr.includes('viagra') || lowerStr.includes('xxx')){

      return true 
    } else{
      
      return false
      
      }

 
  }
 




  function truncate(str, maxlength) {

      return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '…' : str;
    }
  
console.log( truncate("getahun", 5))



/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
function getMaxSubSum(arr) {

      let maxSum = 0; // if we take no elements, zero will be returned
  
    for (let i = 0; i < arr.length; i++) {
      let sumFixedStart = 0;
      for (let j = i; j < arr.length; j++) {
        sumFixedStart += arr[j];
        maxSum = Math.max(maxSum, sumFixedStart);
      }
    }
  
    return maxSum;
  }





function camelize(str) {
  return str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
   
  }
  
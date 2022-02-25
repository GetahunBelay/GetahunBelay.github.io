
"use strict";

/*module.exports = {
  maxOfThree,
  sum,
  multiply,
  findLongestWord,
  reverseArray,
  reverseArrayInPlace,
  scoreExams,
}; 
*/
/**
 * 
 * @param {number} n1 is a number
 * @param {number} n2 is a number 
 * @param {number} n3 is a number
 * @returns {number} largest of n1, n2, n3
 */


function maxOfThree(n1, n2, n3){
    if( (n1 > n2) && (n1 > n3)){
      return n1;
    }else if((n2 > n1) && (n2 > n3)){
      return n2;
    }else if((n3 > n1) && (n3 > n2)){
      return n3;
    }else if(n1 >= n2 && n1 > n3){
        return n1;
    }else{
      return n1;
    }
  }

  
  
  /**
 * 
 * @param {object}} arr is an array of numbersr
 * @returns {number} sum of array elements
 */
  
  function sum(arr){
    let sum = 0;
    for( let i = 0; i < arr.length; i++){
      sum += arr[i];
    }
    return sum;
  }
  console.log(sum([1,2,3,4]));//10


/**
 * 
 * @param {object} arr is array of numbers
 * @returns {number} product of array elements
 */

  function multiply(arr){
    let product = 1;
    for( let i = 0; i < arr.length; i++){
      product *= arr[i];
    }
    return product;
  }
  console.log(multiply([1,2,3,4]));//24
  
  /**
 * 
  * @param {object} arr is array of strings
  * @returns {number} longest size of a string

   */
  function findLongestWord(arr){
    let longest = arr[0].length;
    for( let i = 0; i < arr.length; i++){
      if(arr[i].length > longest){
        longest = arr[i].length;
      }
    }
    return longest;
  }
  console.log(findLongestWord(["Kazakistan", "Canada", "United States"]));
  
  
  /**
 * 
 * @param {object} array of strings or numbers
 * @returns {object} reverse of an array
 */

  function reverseArray(arr){
    let reversedArr = [];
    for(let i = arr.length - 1; i >= 0; i--){
      reversedArr.push( arr[i] );
    }
    return reversedArr;
  }
  console.log(reverseArray(["A", "B", "C"]))
  
  function reverseArrayInPlace(arrayValue){
    let reversed = [];
    for( let j = arrayValue.length - 1; j >= 0; j--){
      reversed.push(arrayValue[j]);
    }
    return reversed;
  }
  console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
  
  /**
 * 
 * @param {object} nested arrays
 * @returns {object} array of numbers
 */
  
   function scoreExams(studentAns, correctAns){ 
    let totalAnswer = [];
    for( let eachAnswer of studentAns){
      let count = 0;
      for( let j = 0; j < eachAnswer.length; j ++){    
        if( eachAnswer[j] === correctAns[j]){
          count ++;
        }
        
      }
      totalAnswer.push(count)
    }
    return totalAnswer
  }
  console.log(scoreExams([[1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4]], [3,1,2,4]))



  /**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
   
    
    
    function generateArray(n1, n2){
        let arr1 = []
        let arr2 = []
        let arr3 = []
        let arr4 = []
          for(let j=1; j<=n2; j++){
            arr1.push(j)
          }
          for(let m=n2+1; m<=n2 + 3; m++){
            arr2.push(m)
          }for( let i = n2 +4; i<=n1*n2; i++){
            arr3.push(i)
          }
        
        arr4.push(arr1, arr2, arr3)
        return arr4
      }
      console.log(generateArray(2,3))
      
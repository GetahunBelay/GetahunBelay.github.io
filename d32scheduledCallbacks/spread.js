"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = {copyArray, concat, findMin, combineObjs }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {array} arr 
 * @returns{array} array
 */

function copyArray(arr){
let arr1 = [...arr];
return arr1
}


/**
 * @param {array} arr 
 * @returns{array} array
 * 
 */

function concat(arr1, arr2){
let arr3 = arr1.concat(...arr2);
return arr3
}

/**
 * @param {array} arr 
 * @returns{array} array
 * 
 */



function findMin(...numbers) {
    let min = Math.min(...numbers);
    return min

}

/**
 * @param {array} arr 
 * @returns{array} array
 * 
 */
function combineObjs(obj1, obj2){
 let obj3 = {...obj1, ...obj2};
 return obj3
}
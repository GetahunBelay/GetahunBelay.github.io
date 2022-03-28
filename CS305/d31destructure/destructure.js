"use strict";
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { topSalary }; //add all of your function names here that you need for the node mocha tests


/**
 * Returns the name who has maximum salary.
 
 * @param {object} salaries object with salaries.
 * @return {String} the name who has maximum salary.
 */

function topSalary(salaries) {

    let maxSalary = 0;
    let person = null;
    for (let [key, value] of Object.entries(salaries)) {
        if (value > maxSalary) {
            maxSalary = value;
            person = key;
        }
    }
    return person;
}
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
console.log(topSalary(salaries));
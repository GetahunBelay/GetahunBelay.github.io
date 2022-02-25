"use strict";
// const assert = require("assert");
// module.exports = {computeSalesComission};

"use strict";
const assert = require("assert");
module.exports = {compoundInterest};


/*
*
* @param {number} initial, the start balance
* @param {number} rate,  a given value
* @param {number} years,  a given value
* @return {number} balance, a value to be return
*/

function compoundInterest(initial, rate, years){
  let balance;//balance of saving
  for(let i=0; i<=years; i++){
    balance = initial * ( ( 1 + rate/1200 )**(12 * i) )
  }
  return balance
}
console.log(compoundInterest(100, 10, 1));//110.471
console.log(compoundInterest(10000, 5, 10));//16470.09

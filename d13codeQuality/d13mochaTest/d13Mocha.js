"use strict";
const assert = require("assert");

/*
*
* @param {number} get initial balance
@param {number} get annual rate of interest
@param {number} get number of years to compound
* @return {number} calculate the balance
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
  

  describe("get balance", function(){
    it("get initial 100, rate 10, years 1 and balance 110.471", function(){
    assert.strictEqual(compoundInterest(100, 10, 1), 110.471)});
    it("get initial 100, rate 10, years 1 and balance 110.471", function(){
    assert.strictEqual(compoundInterest(10000, 5, 10), 16470.09)});
});  

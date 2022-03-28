

"use strict";
const assert = require("assert");

/*
*
* @param {string} strings to be checked
* @return {Boolean} string is vowel or not
*/



function computeSalesComission(isSalaried, salesAmount){
    let comission;
   if(isSalaried){
       if(salesAmount < 300){
           comission = 0;
       }else if(salesAmount >= 300 && salesAmount <= 500){
           comission = 0.01 * salesAmount;
       }else{
           comission = 0.02 * (salesAmount-500) + 0.01 * 500;
   }
   }else {
      if( salesAmount < 300){
       comission = 0;
     }else if(salesAmount >= 300 && salesAmount <= 500){
           comission = 0.02 * salesAmount;
       }else{
           comission = 0.03 * (salesAmount-500) + 0.02 * 500;
       }
   }
       return comission;
   }
   console.log(computeSalesComission(true, 200));//0
   console.log(computeSalesComission(false, 200));//0
   console.log(computeSalesComission(true, 300));//3
   console.log(computeSalesComission(false, 300));//6
   console.log(computeSalesComission(true, 3500));//65
   console.log(computeSalesComission(false, 3500));//100






describe("test of ComputSalesCommission", function(){
    it("tests salaried and 200 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 200), 0);
    });
    it("tests not salaried and 200 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 200), 0);
    });
    it("tests salaried and 300 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 300), 3);
    });
    it("tests not salaried and 300 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 300), 6);
    });
    it("tests salaried and 3500 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 3500), 65);
    });
    it("tests not salaried and 3500 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 3500), 100);
    });
   });
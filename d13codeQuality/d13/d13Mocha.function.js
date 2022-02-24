"use strict";
const assert = require("assert");
module.exports = {computeSalesComission};



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
   
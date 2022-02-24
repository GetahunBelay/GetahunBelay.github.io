

"use strict";
const assert = require("assert");
const functionsModule = require("./d13Balance.function.js");
const compoundInterest = functionsModule.compoundInterest; 



describe("get balance", function(){
        it("get initial 100, rate 10, years 1 and balance 110.471", function(){
        assert.strictEqual(compoundInterest(100, 10, 1), 110.471)});
        it("get initial 100, rate 10, years 1 and balance 110.471", function(){
        assert.strictEqual(compoundInterest(10000, 5, 10), 16470.09)});
});  

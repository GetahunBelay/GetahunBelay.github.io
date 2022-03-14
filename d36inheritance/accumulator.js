"use strict"
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
module.exports = {accumulator }; //add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {number} initialValue is starting value
 * @param {number} increment is amount added each call to accumulate
 * @returns {Accumulator} constructor function
 */
function Accumulator(initialValue, increment){

    function Accumulator(initialValue, increment) {

        this.currentValue = initialValue;
      
        this.increment = increment;
      
        this.accumulate = function () {
      
          this.currentValue = this.currentValue + this.increment;
      
        };
      
      
      
        this.report = function () {
      
          return this.currentValue;
      
        };
      
      }
}
"use strict";

//const calculator = {};  // implement this

function Calculator() {

    this.read = function() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    };
  
    this.sum = function() {
      return this.a + this.b;
    };
  
    this.mul = function() {
      return this.a * this.b;
    };
  }
  
  let calculator = new Calculator();
  calculator.read();
  
  alert( "Sum=" + calculator.sum() );
  alert( "Mul=" + calculator.mul() );








// /* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// /* must be at end of file if are exporting an object so the export is after the definition */
// //module.exports = {calculator }; //add all of your object names here that you need for the node mocha tests


//*****************************************************

// "use strict";



// const calculator = {

//   value1: 0,

//   value2: 0,

//   getValues: function (a, b) {

//     this.value1 = a;

//     this.value2 = b;

//   },



//   sum: function () {

//     const res = this.value1 + this.value2;

//     return res;

//   },

//   mul: function () {

//     const res = this.value1 * this.value2;

//     return res;

//   },

// };

// calculator.getValues(5, 10);

// console.log("expect 15 : ", calculator.sum());

// console.log("expect 50 : ", calculator.mul());



// /* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */

// /* must be at end of file if are exporting an object so the export is after the definition */

// //add all of your object names here that you need for the node mocha tests

//  module.exports = { calculator };
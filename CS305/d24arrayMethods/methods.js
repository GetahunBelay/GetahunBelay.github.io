"use strict"

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator, shuffle, copySorted,getAverageAge }; //add all of your function names here that you need for the node mocha tests




    function filterRange(arr, a, b) {
        // added brackets around the expression for better readability
 
        return arr.filter(item => (a <= item && item <= b));
      }
       
      let arr1 = [5, 3, 8, 1];
       
      let filtered = filterRange(arr1, 1, 4);
      
      console.log( filtered ); // 3,1 (matching values)
      
      console.log( arr1 ); // 5,3,8,1 (not modified)

  

 //***********************************************************
  


    function filterRangeInPlace(arr, a, b) {

        for (let i = 0; i < arr.length; i++) {
          let val = arr[i];
      
          // remove if outside of the interval
          if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
          }
        }
      
      }
      
      let arr = [5, 3, 8, 1];
      
      filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
      
      console.log( arr ); // [3, 1]

  
 
//************************************************************
  

    function Calculator() {

        this.methods = {
          "-": (a, b) => a - b,
          "+": (a, b) => a + b
        };
      
        this.calculate = function(str) {
      
          let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];
      
          if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
          }
      
          return this.methods[op](a, b);
        };
      
        this.addMethod = function(name, func) {
          this.methods[name] = func;
        };
      }

  

  //******************************************************************
  
  

    function unique(arr) {
        let result = [];
      
        for (let str of arr) {
          if (!result.includes(str)) {
            result.push(str);
          }
        }
      
        return result;
      }
      
      let strings = ["Hare", "Krishna", "Hare", "Krishna",
        "Krishna", "Krishna", "Hare", "Hare", ":-O"
      ];
      
      console.log( unique(strings) ); // Hare, Krishna, :-O

  

  //***************************************************************

  

    let users = [
        {id: 'john', name: "John Smith", age: 20},
        {id: 'ann', name: "Ann Smith", age: 24},
        {id: 'pete', name: "Pete Peterson", age: 31},
      ];
      
      let usersById = groupById(users);


      function groupById(array) {
        return array.reduce((obj, value) => {
          obj[value.id] = value;
          return obj;
        }, {})
      }
      

      
      function sortByAge(arr11) {
  arr11.sort((a, b) => a.age - b.age);
}

let johns = { name: "John", age: 25 };
let petes = { name: "Pete", age: 30 };
let marys = { name: "Mary", age: 28 };

let arr11 = [ petes, johns, marys ];

sortByAge(arr11);

// now sorted is: [john, mary, pete]
console.log(arr11[0].name); // John
console.log(arr11[1].name); // Mary
console.log(arr11[2].name); // Pete


//******************************************************************

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr10 = [ john, pete, mary ];

console.log( getAverageAge(arr10) ); // 28*/

//********************************************************************


function copySorted(arr9) {
  return arr9.slice().sort();
}

let arr9 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr9);

console.log( sorted );
console.log( arr9 );
      
//***************************************************************************

let arr7 = [1, 2, 3];

shuffle(arr7);
// arr = [3, 2, 1]

shuffle(arr7);
// arr = [2, 1, 3]

shuffle(arr7);
// arr = [3, 1, 2]
// ...


function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let arr8 = [1, 2, 3];
shuffle(arr8);
console.log(shuffle(arr8));

  //****************************************************************************
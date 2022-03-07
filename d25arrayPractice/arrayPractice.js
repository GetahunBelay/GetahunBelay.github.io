/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { doubleNums,doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge, includesEvenNum}; //add all of your function names here that you need for the node mocha tests

let numArray;
let peopleArray;


    function doubleNums(arr){

    return arr.map(num => num * 2);
    }
    
    

    function doubleAges(arr){

    return arr.map(item => doubl(item));

}
      
       

    
    
    function filterEven(arr){

        return arr.filter(num => num % 2 === 0);
    
    }
    
    function filterOver10(arr) {

       return arr.filter(num => (num.age) > 10); 
    
    }
    
    function findEvenNum(arr){

        return arr.find(num => num % 2 === 0)
    
    }
    
    function findEvenAge(arr){

        return arr.find(num => (num.age) % 2 === 0);
    
    }
    
    function includesEvenNum(arr){

        return arr.includes(num => arr.includes(num % 2 === 0))
    
    }
    
    
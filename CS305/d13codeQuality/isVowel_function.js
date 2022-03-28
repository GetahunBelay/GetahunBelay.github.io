"use strict";
//const assert = require("assert");
module.exports = {isVowel};

/*
*
* @param {string} strings to be checked
* @return {Boolean} string is vowel or not
*/

function isVowel(vowel){
  if(vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u"){
      return true;
  }else{
      return false;
  }
}
console.log(isVowel("a"));
console.log(isVowel("e"));
console.log(isVowel("i"));
console.log(isVowel("o"));
console.log(isVowel("u"));
console.log(isVowel("z"));
console.log(isVowel(5));
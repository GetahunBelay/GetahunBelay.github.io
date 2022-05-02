"use strict"


let fibonacci = (function () {
    let obj = {};
    function fun(n) {
        let value;
        if (n in obj) { //boolean
            value = obj[n];
        }
        else {
            if (n === 0 | n === 1) {
                value = 1;
            } else {
                value = fun(n - 1) + fun(n - 2)
            }
            obj[n] = value;
        }
        return value;
    }
    return fun
})();

console.log(fibonacci(20));//10946
console.log(fibonacci(50));//20365011074

// function fibonacci(n){
//     if(n<=1){
//         return 1
//     }
//     return fibonacci(n-1) + fibonacci(n-2)
// }
//  console.log(fibonacci(8));//34
//  console.log(fibonacci(8));//34
//  console.log(fibonacci(8));//34
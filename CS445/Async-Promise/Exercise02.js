/*Exercise 02
Create a method named removeDuplicatesAsync which works only for Array types and removes all duplicates for 
any array asynchornously. When you finish, test using the code below:
NOTE: If you use Promise, the promise is already resolved inside the method which is different from previous exercise
Optional: You can try to implement use async&await
console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync(); 
console.log(`end`);

// Output:
// start
// end
// [4, 1, 5, 7, 2, 3, 6]
*/

Array.prototype.removeDuplicatesAsync = function (arr) {
    return this.filter(function (item, index, self) {
        return self.indexOf(item) == index;
    });
}

console.log("start");
setTimeout(function () { console.log([4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync()); }, 2000);
console.log("End");





//  function removeDuplicatesAsync (arr) {
//     console.log("start")
//     let nonDupArr = []
//     setTimeout(() => {
//         for (let i = 0; i < arr.length; i++) {
//             if (nonDupArr.indexOf(arr[i]) === -1) {
//                 nonDupArr.push(arr[i])
//             }
//         }
//         console.log(nonDupArr)
//     }, 2000)
//     console.log("end")
// }

//  removeDuplicatesAsync([4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2])



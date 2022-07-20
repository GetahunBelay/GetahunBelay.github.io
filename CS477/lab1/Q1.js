Array.prototype.even = function () {
    let evenArr = new Array()
    this.forEach(elem => {
        if (elem % 2 === 0) {
            evenArr.push(elem)
        }
    })
    return evenArr;
}
console.log("Even numbers: " + [1, 2, 3, 4, 5, 6, 7, 8].even());


Array.prototype.odd = function () {
    let oddArr = new Array();
    this.forEach(elem => {
        if (elem % 2 != 0) {
            oddArr.push(elem)
        }
    })
    return oddArr;
}
console.log("Odd numbers: " + [1, 2, 3, 4, 5, 6, 7, 8].odd());

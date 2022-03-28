"use strict";

/*Use __proto__ to assign prototypes in a way that any property lookup will follow the path:
pockets → bed → table → head.
*/
{
let head = {
    glasses: 1
};

let table = {
    pen: 3
};

let bed = {
    sheet: 1,
    pillow: 2
};

let pockets = {
    money: 2000
};

table.__proto__ = head;
bed.__proto__ = table;
pockets.__proto__ = bed;

console.log(pockets.pen);// 3
console.log(bed.glasses);// 1

}
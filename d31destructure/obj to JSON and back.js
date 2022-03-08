"use strict";


let users = {
    name: "John Smith",
    age: 35
};

let users1 = JSON.stringify(users);
let users2 = JSON.parse(users1);
console.log(users2);
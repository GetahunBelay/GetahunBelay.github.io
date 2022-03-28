"use strict";

//Which values are shown in the process?

{
let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};

console.log(rabbit.jumps); // true (1)

delete rabbit.jumps;

console.log(rabbit.jumps); // null (2)

delete animal.jumps;

console.log(rabbit.jumps); // undefined (3)

}

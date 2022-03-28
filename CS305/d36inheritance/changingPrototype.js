"use strict";
/* eslint-disable */

//In the start, we have this code:
{
/**
 * @returns {*} undefined
 */
function Rabbit() { }
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

console.log(rabbit.eats); // true

}
//We added one more string (emphasized). What will alert show now?


/**
 * @returns {*} return undefined
 */
function Rabbit() { }
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

console.log(rabbit.eats); // true



//if the code is like this (replaced one line)?
{
/**
 * @returns {*} return undefined
 */
function Rabbit() { }
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false;

console.log(rabbit.eats); // false

}

/////////////////////////////////////////////

{
/**
 * @returns {*} return undefined
 */
function Rabbit() { }
Rabbit.prototype = {
    eats: true
};

let rabbit1 = new Rabbit();

delete rabbit.eats;

console.log(rabbit1.eats); // true

}

{
/**
 * @returns {*} return undefined
 */
function Rabbit() { }
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

console.log(rabbit.eats); // undefined

}
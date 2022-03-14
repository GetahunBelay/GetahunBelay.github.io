"use strict";

/**
 * which object receives the full property: animal or rabbit? rabbit
 * Because this is an object before the dot, so rabbit.eat() modifies rabbit.
 */
/* eslint-disable */
let animal = {
    eat() {
        this.full = true;
    }
};

let rabbit = {
    __proto__: animal
};

rabbit.eat();
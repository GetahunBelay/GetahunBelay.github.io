"use strict";

/**
 * We have two hamsters: speedy and lazy inheriting from the general hamster object.
 * When we feed one of them, the other one is also full. Why? How can we fix it?
 */

{
    let hamster = {
        stomach: [],

        /**
         * 
         * @param {String} food input type of food
         * @return{string} returns food
         */
        eat(food) {
            this.stomach.push(food);
        }
    };

    let speedy = {
        __proto__: hamster
    };

    let lazy = {
        __proto__: hamster
    };

    // This one found the food
    speedy.eat("apple");
    console.log(speedy.stomach); // apple

    // This one also has it
    console.log(lazy.stomach); // apple

}

/**
 * Also we can totally avoid the problem by making sure that each hamster has their own stomach:
 */

{

    let hamster = {
        stomach: [],

        /**
         * @param {String} food input type of food
         * @return{String} output type of food
         */
        eat(food) {
            this.stomach.push(food);
        }
    };

    let speedy = {
        __proto__: hamster,
        stomach: []
    };

    let lazy = {
        __proto__: hamster,
        stomach: []
    };

    // Speedy one found the food
    speedy.eat("apple");
    console.log(speedy.stomach); // apple

    // Lazy one's stomach is empty
    console.log(lazy.stomach); // <nothing>

}
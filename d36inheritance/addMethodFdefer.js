"use strict";

Function.prototype.defer = function (mesg) {
    setTimeout(this, mesg);
};

/**
 * @returns {*} undefined
 */
function funk() {
    console.log("Hello!");
}

funk.defer(1000); // shows "Hello!" after 1 sec
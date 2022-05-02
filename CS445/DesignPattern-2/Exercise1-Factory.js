"use strict"

class RegularBulb {
    constructor() {
        this.lumen = [50, 100]
        this.last = 1
    }
}

class EnergySaverBulb {
    constructor(color) {
        this.lumen = [5, 40]
        this.last = 10
        this.color = color
    }
}
/////////////////////////////creating Factory method
class Factory {
    createBulb(type, color) {
        // let lightBulb;
        if (type === "regularBulb") {
            return new RegularBulb()
        } else if (type === "energySaverBulb") {
            return new EnergySaverBulb(color)
        }

        return null
    }
}
const factory = new Factory();
const bulbs = [];

bulbs.push(factory.createBulb("regularBulb"));
bulbs.push(factory.createBulb("energySaverBulb", "red"));


for (let i = 0, len = bulbs.length; i < len; i++) {
    console.log(bulbs[i]);
}
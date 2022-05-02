"use strict"
///////////////////////////////Making ready each strategy
class Info {
    logging(message) {
        console.info(message);
    }
}

class Warn {
    logging(message) {
        console.warn(message);
    }
}

class Error {
    logging(message) {
        console.error(message);
    }
}

class Table {
    logging(message) {
        console.table(message);
    }
}
////////////////////////////////////////////////Creating a strategy class
class Strategy {
    constructor() {
        this.strategy = new Info //default
    }
    setStrategy(strategy) {
        this.strategy = strategy
    }

    logging(message) {
        return this.strategy.logging(message)
    }
}

// class Strategy{
//     setStrategy(strategy){
//         this.strategy = strategy
//     }

//     logging(message){
//         this.strategy.logging(message)
//     }
// }

const strategy = new Strategy();

strategy.setStrategy(new Info());
strategy.logging('info....');

strategy.setStrategy(new Warn());
strategy.logging('warn....');

strategy.setStrategy(new Error());
strategy.logging('error....');

strategy.setStrategy(new Table());
strategy.logging(['table', 'table']);
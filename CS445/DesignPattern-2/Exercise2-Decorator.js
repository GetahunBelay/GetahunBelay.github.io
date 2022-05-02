"use strict"

class User {
    constructor(name) {
        this.name = name;
    }

    logger() {
        console.log("user:" + this.name)
    }
}

class DecoratedUser {
    constructor(user, street, state) {
        this.user = user;// composition
        this.name = user.name;//ensures interface stays the same
        this.street = street;
        this.state = state;
    }

    logger() {
        console.log("decorated user: " + this.name + ", " + this.street + ", " + this.state)
    }
}

const user = new User("Getahun")
console.log(user)
const decoratedUser = new DecoratedUser(user, "Lorton", "Virginia")
console.log(decoratedUser)
decoratedUser.logger();//decorated user: Getahun, Lorton, Virginia

user.logger();//user:Getahun

/*
User { name: 'Getahun' }
DecoratedUser {
  user: User { name: 'Getahun' },
  name: 'Getahun',
  street: 'Lorton',
  state: 'Virginia'
}
*/
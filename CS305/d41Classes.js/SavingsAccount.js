"use strict";
/* global Account require  */
/*const acc = require("./account.js");//with node need the name of your file with your functions here
const Account = acc.Account;  //do this for all of the functions used in the Mocha tests

/* exports at end of file since exporting an object, which can only be referenced after definition   */


class SavingsAccount{

constructor (number, interest) {
    this._number = number;
    this._interest = interest;
    this._balance = 0.0;
}

setInterest(interest) {
    this._interest = interest;
}

deposit(amount) {
    if ( amount <= 0 ) {
        throw new RangeError("Deposit amount has to be greater than zero");
    } else {
        this._balance += amount;
    }
    
}

addInterest() { 
    this._balance = this._balance*(1 + this._interest/100);
}

withdraw(amount) {
    if (amount <= 0) {
        throw new RangeError("Withdraw amount has to be greater than zero");
    }
    if (amount > this._balance) {
        throw Error("Insufficient funds");
    }
    this._balance -= amount;

}

getNumber() {
    return this._number;
}

getInterest() {
    return this._interest;
}

getBalance() {
    return this._balance;
}

endOfMonth() {
    this.addInterest()
    return `Interest added SavingsAccount ${this._number}: balance: ${this._balance} interest: ${this._interest}`;
}

toString() {
    return `SavingsAccount ${this._number}: balance: ${this._balance} interest: ${this._interest}`;
}

}

/* global exports */
//exports.SavingsAccount = SavingsAccount;
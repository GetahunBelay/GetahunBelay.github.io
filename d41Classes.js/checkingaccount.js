"use strict";
/* global Account  */

/*const acc = require("./account.js");//with node need the name of your file with your functions here
const Account = acc.Account;  //do this for all of the functions used in the Mocha tests

/* exports at end of file since exporting an object, which can only be referenced after definition   */


class CheckingAccount{
    constructor(number, overdraft) {
        this._number = number;
        this._overdraft = overdraft;
        this._balance = 0.0;
    }
    getNumber(){
        return this._number;
    }
    getOverdraft(){
        return this._overdraft;
    }
    setOverdraft(amount){
        this._overdraft = amount;
    }
    withdraw(amount){
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if ((amount + Math.abs(this._balance)) > this._overdraft ) {
            throw Error("Insufficient funds, cannot withdraw beyond overdraft limit");
        }
        this._balance -= amount;
    }
    getBalance(){
        return this._balance;
    }
    deposit(amount){
        if (amount <= 0) {
            throw new RangeError("Deposit amount has to be greater than zero");
        }
        this._balance += amount;
    }
    toString(){
        return `CheckingAccount ${this._number}: balance: ${this._balance} overdraft limit: ${this._overdraft}`
    }
    endOfMonth(){
        if (this._balance < 0) {
            return `Warning, low balance CheckingAccount ${this._number}: balance: ${this._balance} overdraft limit: ${this._overdraft}`;
        }
        return "";
    }
}















/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//exports.CheckingAccount = CheckingAccount;
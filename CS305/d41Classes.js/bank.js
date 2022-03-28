"use strict";
/* global exports require Account   SavingsAccount CheckingAccount */

/* exports at end of file since exporting an object, which can only be referenced after definition   */
    
const acc = require("./account.js");//with node need the name of your file with your functions here
const Account = acc.Account;  //do this for all of the functions used in the Mocha tests
const chk = require("./checkingaccount.js");
const CheckingAccount = chk.CheckingAccount;
const sav = require("./savingsaccount.js");
const SavingsAccount = sav.SavingsAccount; 

/**
 * a bank class that is a templet for all the accounts
 */
// class Bank{  
    
    
//   /**
//      * Constructor for creating a new Account object
//      * 
//      */
//     constructor(){
//         this._accounts =[];   
//     }

//     static nextNumber = 1;

//     /**
//      * 
//      * @param {Number} number an new account number.
//      * @returns {Number} the number of accounts created.
//      */
//     addAccount(){
//         const newAccount = new Account(Bank.nextNumber++);
//         this._accounts.push(newAccount);
//         return this._accounts.length;
//     }
//     /**
//      * 
//      * @param {Number} interest the interest rate for the new account.
//      * @returns {Number} the number of accounts created.
//      */
//     addSavingsAccount(interest){
//         const newSaving = new SavingsAccount(Bank.nextNumber++,interest);
//         this._accounts.push(newSaving);
//         return this._accounts.length;
//     }
//     /**
//      * 
//      * @param {Number} overdraft the overdraft limit.
//      * @returns {Number} the number of accounts created.
//      */
//     addCheckingAccount(overdraft){
//         const newChecking = new CheckingAccount(Bank.nextNumber++,overdraft);
//         this._accounts.push(newChecking);
//         return this._accounts;
//     }

//     closeAccount(number){
//        const index = this._accounts.findIndex(customer => customer.getNumber()===number);
//        if(index > -1){
//            this._accounts.splice(index,1);
//        }       
//     }
//     accountReport(){
        
//         return this._accounts.join("\n");
//     }

//      endOfMonth(){
//         let result = ""
//         for(const accounts of this._accounts){
//              result+= accounts.endOfMonth()+ "\n";
//         }
//         return result;
//      } 

// }


/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//  exports.Bank = Bank;


/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
  //exports.Bank = Bank;

/////////////////////////////////////////////////////

class Bank {
    constructor() {
      this._accounts = [];
      this.nextNumber = 1;
    }
    addAccount() {
      this._accounts.push(new Account(this.nextNumber));
      this.nextNumber++;
    }
    addSavingsAccount(interest) {
      this._accounts.push(new SavingsAccount(this.nextNumber, interest));
      this.nextNumber++;
    }
    addCheckingAccount(overdraft) {
      this._accounts.push(new CheckingAccount(this.nextNumber, overdraft));
      this.nextNumber++;
    }
    closeAccount(number) {
      const index = this._accounts.findIndex((item) => item._number === number);
      this._accounts.splice(index, 1);
    }
  
  
    accountReport() {
      let report = "";
      for (let element of this._accounts) {
        report += element.toString() + "\n";
      }
      return report;
    }
    endOfMonth() {
      // eslint-disable-next-line id-length
      let rpt = this._accounts.map((n) => n.endOfMonth());
      return rpt.join("\n");
    }
  }
  
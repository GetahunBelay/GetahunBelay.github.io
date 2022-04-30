let bankAccount: {
    money:number,
    deposit(value: number): void 
}
    
 bankAccount = {
    money: 2000,
    deposit(value){
        this.money += value;
    }
};

let myself: {
    name: string,
    bankAccount: typeof bankAccount,
    hobbies: (string)[] 
}
  myself = {
    name: "John",
    bankAccount: bankAccount,
    hobbies: ["Violin", "Cooking"]
};

myself.bankAccount.deposit(500);
console.log(myself);//2500
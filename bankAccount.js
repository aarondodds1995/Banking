// bankAccount.js

export default class BankAccount {
    #balance;

    constructor(accountHolder, initialBalance = 0) {
        this.accountHolder = accountHolder;
        this.accountNumber = this.generateAccountNumber();
        this.#balance = initialBalance;
    }

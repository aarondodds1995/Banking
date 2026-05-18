// bankAccount.js

export default class BankAccount {
    #balance;

    constructor(accountHolder, initialBalance = 0) {
        this.accountHolder = accountHolder;
        this.accountNumber = this.generateAccountNumber();
        this.#balance = initialBalance;
    }

    // Generate random 6-digit account number
    generateAccountNumber() {
        return Math.floor(100000 + Math.random() * 900000);
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            return `Deposited $${amount}`;
        } else {
            return "Invalid deposit amount";
        }
    }

    withdraw(amount) {
        if (amount <= 0) {
            return "Invalid withdrawal amount";
        }

        if (amount > this.#balance) {
            return "Insufficient funds";
        }

        this.#balance -= amount;
        return `Withdrawn $${amount}`;
    }

    checkBalance() {
        return this.#balance;
    }
}

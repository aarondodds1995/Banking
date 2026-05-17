// index.js

import BankAccount from './bankAccount.js';

const createBtn = document.getElementById("createAccount");
const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");
const balanceBtn = document.getElementById("balanceBtn");

const holderInput = document.getElementById("holderName");
const balanceInput = document.getElementById("initialBalance");
const accountNumberInput = document.getElementById("accountNumber");
const amountInput = document.getElementById("amount");
const output = document.getElementById("output");

// Store all accounts
const accounts = [];

// Create Account
createBtn.addEventListener("click", () => {

    const holder = holderInput.value.trim();
    const initialBalance = Number(balanceInput.value);

    if (!holder) {
        output.textContent = "Please enter account holder name.";
        return;
    }

    const newAccount = new BankAccount(holder, initialBalance);

    // Save account
    accounts.push(newAccount);

    // Display generated account number
    accountNumberInput.value = newAccount.accountNumber;

    output.textContent =
        `Account created. Account Number: ${newAccount.accountNumber}`;
});

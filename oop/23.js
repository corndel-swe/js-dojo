/**
 * A BankAccount class with transaction history.
 */
export class BankAccount {
  /**
   * @param {string} accountNumber - The account number.
   * @param {number} initialBalance - The starting balance.
   */
  constructor(accountNumber, initialBalance) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
    this.transactionHistory = [];
    // TODO: Store accountNumber and balance as properties.
    // TODO: Initialize an empty array for transaction history.
  }

  /**
   * Deposits money and records the transaction.
   * @param {number} amount - The amount to deposit.
   */
  deposit(amount) {
    this.balance += amount;
    this.transactionHistory.push({ type: "deposit", amount, date: new Date() });
    // TODO: Add amount to balance.
    // TODO: Add a transaction object to history: { type: 'deposit', amount, date: new Date() }
  }

  /**
   * Withdraws money if sufficient funds exist.
   * @param {number} amount - The amount to withdraw.
   * @returns {boolean} - True if successful, false if insufficient funds.
   */
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.transactionHistory.push({
        type: "withdraw",
        amount,
        date: new Date(),
      });
      return true;
    } else {
      return false;
    }
    // TODO: Check if balance >= amount.
    // TODO: If yes, subtract amount and add transaction to history.
    // TODO: Return true if successful, false otherwise.
  }

  /**
   * Gets the transaction history.
   * @returns {Object[]} - Array of transaction objects.
   */
  getTransactionHistory() {
    return this.transactionHistory
    // TODO: Return the transaction history array.
  }

  /**
   * Gets the current balance.
   * @returns {number} - The current balance.
   */
  getBalance() {
    return this.balance
    // TODO: Return the balance.
  }
}

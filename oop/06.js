/**
 * A BankAccount class with deposit and withdraw methods.
 */
export class BankAccount {
  /**
   * @param {number} initialBalance - The starting balance.
   */
  constructor(initialBalance) {
    // TODO: Store the balance as a property.
    this.balance = initialBalance
  }

  /**
   * Deposits money into the account.
   * @param {number} amount - The amount to deposit.
   */
  deposit(amount) {
    this.balance += amount
    // TODO: Add the amount to the balance.
  }

  /**
   * Withdraws money from the account.
   * @param {number} amount - The amount to withdraw.
   */
  withdraw(amount) {
    this.balance -= amount
    // TODO: Subtract the amount from the balance.
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

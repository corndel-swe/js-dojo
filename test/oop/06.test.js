import { BankAccount } from '../../oop/06.js'
import assert from 'assert'

describe('BankAccount', function () {
  it('should initialize with correct balance', function () {
    const account = new BankAccount(100)
    assert.strictEqual(account.getBalance(), 100)
  })

  it('should deposit correctly', function () {
    const account = new BankAccount(100)
    account.deposit(50)
    assert.strictEqual(account.getBalance(), 150)
  })

  it('should withdraw correctly', function () {
    const account = new BankAccount(100)
    account.withdraw(30)
    assert.strictEqual(account.getBalance(), 70)
  })

  it('should handle multiple transactions', function () {
    const account = new BankAccount(100)
    account.deposit(50)
    account.withdraw(30)
    account.deposit(20)
    assert.strictEqual(account.getBalance(), 140)
  })
})

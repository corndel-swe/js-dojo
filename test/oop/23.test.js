import { BankAccount } from '../../oop/23.js'
import assert from 'assert'

describe('BankAccount with transaction history', function () {
  it('should track deposits', function () {
    const account = new BankAccount('12345', 100)
    account.deposit(50)
    const history = account.getTransactionHistory()
    assert.strictEqual(history.length, 1)
    assert.strictEqual(history[0].type, 'deposit')
    assert.strictEqual(history[0].amount, 50)
  })

  it('should track withdrawals', function () {
    const account = new BankAccount('12345', 100)
    account.withdraw(30)
    const history = account.getTransactionHistory()
    assert.strictEqual(history.length, 1)
    assert.strictEqual(history[0].type, 'withdraw')
    assert.strictEqual(history[0].amount, 30)
  })

  it('should prevent overdraft', function () {
    const account = new BankAccount('12345', 100)
    const result = account.withdraw(150)
    assert.strictEqual(result, false)
    assert.strictEqual(account.getBalance(), 100)
  })

  it('should track multiple transactions', function () {
    const account = new BankAccount('12345', 100)
    account.deposit(50)
    account.withdraw(30)
    account.deposit(20)
    const history = account.getTransactionHistory()
    assert.strictEqual(history.length, 3)
    assert.strictEqual(account.getBalance(), 140)
  })
})

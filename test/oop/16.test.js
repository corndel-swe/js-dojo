import { Employee, Manager } from '../../oop/16.js'
import assert from 'assert'

describe('Employee and Manager', function () {
  it('should return employee salary', function () {
    const emp = new Employee('Alice', 50000)
    assert.strictEqual(emp.getAnnualSalary(), 50000)
  })

  it('should return manager salary with bonus', function () {
    const mgr = new Manager('Bob', 60000, 10000)
    assert.strictEqual(mgr.getAnnualSalary(), 70000)
  })

  it('should handle different values', function () {
    const mgr = new Manager('Charlie', 80000, 15000)
    assert.strictEqual(mgr.getAnnualSalary(), 95000)
  })
})

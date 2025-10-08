import { Person } from '../../oop/12.js'
import assert from 'assert'

describe('Person', function () {
  it('should get age correctly', function () {
    const person = new Person('Alice', 30)
    assert.strictEqual(person.getAge(), 30)
  })

  it('should set age correctly', function () {
    const person = new Person('Bob', 25)
    person.setAge(26)
    assert.strictEqual(person.getAge(), 26)
  })

  it('should not allow negative age', function () {
    const person = new Person('Charlie', 30)
    person.setAge(-5)
    assert.strictEqual(person.getAge(), 30)
  })
})

import { createPerson } from '../../oop/01.js'
import assert from 'assert'

describe('createPerson', function () {
  it('should create a person object with name and age', function () {
    const person = createPerson('Alice', 30)
    assert.strictEqual(person.name, 'Alice')
    assert.strictEqual(person.age, 30)
  })

  it('should work with different values', function () {
    const person = createPerson('Bob', 25)
    assert.strictEqual(person.name, 'Bob')
    assert.strictEqual(person.age, 25)
  })
})
